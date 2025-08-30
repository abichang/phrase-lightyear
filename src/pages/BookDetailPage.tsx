import { useParams, Link } from "react-router-dom";
import { books } from "@/data/fake-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function BookDetailPage() {
  const { id } = useParams<{ id: string }>();
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold">Book not found</h2>
        <Link to="/" className="text-accent-foreground hover:underline">
          Back to the list
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/" className="text-accent-foreground hover:underline">
          &larr; Back to all books
        </Link>
      </div>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="font-serif text-4xl">{book.title}</CardTitle>
          <CardDescription className="text-lg">by {book.author}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg italic border-l-4 border-accent pl-4 my-6">{book.poeticExcerpt}</p>
          <p className="text-base leading-relaxed mb-8">{book.summary}</p>
          
          <h3 className="text-2xl font-bold font-serif mb-4 border-b pb-2">Insights from Readers</h3>
          <div className="space-y-4">
            {book.insights.map((insight) => (
              <Card key={insight.id} className="bg-secondary/50">
                <CardContent className="p-4">
                  <p className="mb-2">{insight.text}</p>
                  <p className="text-sm text-right text-muted-foreground">- {insight.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
