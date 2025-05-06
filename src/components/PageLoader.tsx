export default function PageLoader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-95 z-50 transition-all duration-500">
      <div className="flex justify-center items-center">
        <div className="w-5 h-5 mx-1 bg-blue-800 rounded-full animate-[bounce_1.4s_infinite_ease-in-out_-0.32s]"></div>
        <div className="w-5 h-5 mx-1 bg-blue-600 rounded-full animate-[bounce_1.4s_infinite_ease-in-out_-0.16s]"></div>
        <div className="w-5 h-5 mx-1 bg-blue-400 rounded-full animate-[bounce_1.4s_infinite_ease-in-out]"></div>
      </div>
      <p className="mt-5 text-base text-gray-900 font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
}
