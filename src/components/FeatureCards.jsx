function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="rounded-lg p-6 border border-green-100 bg-green-50">
        <div className="text-3xl mb-3">⚡</div>
        <h3 className="text-lg font-semibold text-green-700 mb-2">Lightning Fast</h3>
        <p className="text-green-600 text-sm">Powered by Vite for instant development</p>
      </div>
      <div className="rounded-lg p-6 border border-green-100 bg-green-50">
        <div className="text-3xl mb-3">🎨</div>
        <h3 className="text-lg font-semibold text-green-700 mb-2">Beautiful UI</h3>
        <p className="text-green-600 text-sm">Styled with Tailwind CSS</p>
      </div>
      <div className="rounded-lg p-6 border border-green-100 bg-green-50">
        <div className="text-3xl mb-3">⚛️</div>
        <h3 className="text-lg font-semibold text-green-700 mb-2">Modern React</h3>
        <p className="text-green-600 text-sm">Built with React 18 and hooks</p>
      </div>
    </div>
  );
}

export default FeatureCards;
