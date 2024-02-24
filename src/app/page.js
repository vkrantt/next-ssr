export async function getData() {
  const res = await fetch("https://dummyjson.com/todos");
  const { todos } = await res.json();
  return todos;
}
export default async function Home() {
  const todos = await getData();
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function getAllTodos() {
  //     setIsLoading(true);
  //     const res = await fetch("https://dummyjson.com/todos");
  //     const { todos } = await res.json();
  //     console.log(todos);
  //     setTodos(todos);
  //     setIsLoading(false);
  //   }

  //   getAllTodos();
  // }, []);
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="text-xl text-sky-600">Next - SSR</div>
      <div>
        {/* {isLoading && <p className="m-0 text-2xl text-red-600">Loading...</p>} */}
        <div className="mt-10">
          {todos?.map((todo, i) => (
            <div key={todo.id}>
              <p className="m-0 text-sm border border-b-2 p-3 bg-slate-200 border-b-fuchsia-500">
                <span className="text-sky-600">{i + 1} -</span> {todo.todo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
