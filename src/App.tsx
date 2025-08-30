import { Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { BookListPage } from "@/pages/BookListPage";
import { BookDetailPage } from "@/pages/BookDetailPage";

function App() {
  return (
    <div className="min-h-screen bg-background font-serif text-foreground">
      <Header />
      <Routes>
        <Route path="/" element={<BookListPage />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
      </Routes>
      <footer className="text-center py-6 border-t border-secondary/50">
        <p className="text-secondary-foreground/60">為喜愛深刻閱讀體驗的讀者設計。</p>
      </footer>
    </div>
  );
}

export default App;
