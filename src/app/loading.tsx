export default function Loading() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center'>
      <div
        className='w-10 h-10 rounded-full border-2 border-gray-700 border-t-indigo-400 animate-spin'
        role='status'
        aria-label='Loading'
      />
    </div>
  );
}
