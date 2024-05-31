import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />

        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}
