import { BookCard } from "@/components/BookCard";
import { books } from "@/data/fake-data";

export function BookListPage() {
  return (
    <main className="container mx-auto px-4 pb-16">
      <div className="text-center mb-12">
          <p className="text-lg text-secondary-foreground/80">精選書籍摘要，包含書名、作者及詩意節錄。</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}
