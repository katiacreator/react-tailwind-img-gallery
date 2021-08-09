


function App() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" alt="" className="" />
      <div className="px-6 py-4">
        <div className=" font-bold text-purple-500 text-xl">Photo by John Doe</div>
      </div>
      <div>
        <ul>
          <li>
            <p className="px-6 py-1">Views: 4000</p> 
          </li>
          <li>
            <p className="px-6 py-1">Downloads: 400</p> 
          </li>
          <li>
            <p className="px-6 py-1">Likes: 400</p> 
          </li>
        </ul>
      </div>
      <div className="px-6 py-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag3</span>
      </div>
    </div>
  );
}

export default App;
