import { NextRequest, NextResponse } from "next/server";

// Backend API URL (pastikan mengarah ke backend Anda)
const API_BASE_URL = process.env.BACKEND_API_URL || "http://localhost:8000";

// Helper untuk meneruskan headers
const getForwardHeaders = (request: NextRequest) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Forward auth header jika ada
  const authHeader = request.headers.get("Authorization");
  if (authHeader) {
    headers["Authorization"] = authHeader;
  }

  // Tambahkan Accept header
  headers["Accept"] = "application/json";

  return headers;
};

// Handler request generik
async function handleRequest(
  request: NextRequest,
  params: Promise<{ path: string[] }>,
  method: string
) {
  const resolvedParams = await params;
  const path = resolvedParams.path.join("/");
  const searchParams = request.nextUrl.searchParams.toString();
  const queryString = searchParams ? `?${searchParams}` : "";
  const url = `${API_BASE_URL}/${path}${queryString}`;

  const headers = getForwardHeaders(request);
  const options: RequestInit = { method, headers };

  // Tambahkan body untuk method yang mendukungnya
  if (["POST", "PUT", "PATCH"].includes(method)) {
    const contentType = request.headers.get("Content-Type");
    if (contentType?.includes("application/json")) {
      options.body = JSON.stringify(await request.json().catch(() => ({})));
    } else if (contentType?.includes("multipart/form-data")) {
      // Handle form data (file)
      const formData = await request.formData();
      options.body = formData as unknown as BodyInit;
      // Hapus Content-Type untuk membiarkan browser menetapkannya dengan boundary
      delete headers["Content-Type"];
    }
  }

  try {
    console.log(`Proxying ${method} request to: ${url}`);
    const response = await fetch(url, options);

    // Dapatkan data response
    const contentType = response.headers.get("Content-Type") || "";
    let data;

    if (contentType.includes("application/json")) {
      data = await response.json().catch(() => ({}));
    } else {
      data = await response.text().catch(() => "");
    }

    // Kembalikan response dengan status dan header yang sama
    return NextResponse.json(data, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch (error) {
    console.error(`API request failed: ${url}`, error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to connect to API server",
      },
      { status: 500 }
    );
  }
}

// HTTP method handlers
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return handleRequest(request, params, "GET");
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return handleRequest(request, params, "POST");
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return handleRequest(request, params, "PUT");
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return handleRequest(request, params, "PATCH");
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return handleRequest(request, params, "DELETE");
}
