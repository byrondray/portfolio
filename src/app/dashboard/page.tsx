'use client';

import { useState } from 'react';
import UnityWrapper from '@/components/unityWrapper';

export default function UnityDemo() {
  const [error, setError] = useState<string | null>(null);

  return (
    <div className='min-h-screen bg-gray-900'>
      <h1 className='text-3xl font-bold text-center py-4 text-white'>
        Unity WebGL Demo
      </h1>
      {error ? (
        <div className='text-red-500 text-center p-4'>{error}</div>
      ) : (
        <UnityWrapper
          loaderUrl='/Build/WebGL.loader.js'
          dataUrl='/Build/WebGL.data'
          frameworkUrl='/Build/WebGL.framework.js'
          codeUrl='/Build/WebGL.wasm'
          productName='My Unity Demo'
          onError={(error) => setError(error.message)}
          onProgress={(progress) => console.log('Loading:', progress)}
          onLoad={() => console.log('Unity game loaded!')}
        />
      )}
    </div>
  );
}
