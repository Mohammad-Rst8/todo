import TodoContainer from "./Components/TodoContainer"
export default function Home() {
  return (
    <div className="font-sans flex items-center bg-black text-white justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <TodoContainer/>
    </div>
  );
}
