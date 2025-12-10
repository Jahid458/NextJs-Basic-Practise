// app/servercomp/page.jsx

export default async function ServerComp() {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Server Comp</h1>

      <ul className="grid grid-cols-3 gap-5">
        {data.map((curElem, index) => (
          <li
            key={index}
            className="p-4 bg-gray-200 rounded-lg shadow-md"
          >
            {curElem.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
