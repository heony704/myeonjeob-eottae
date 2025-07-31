import { Route, Routes } from "react-router";
import { Home } from "@/features/home";
import { Interview } from "@/features/interview";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="interview" element={<Interview />} />
    </Routes>
  );
}

export default App;
