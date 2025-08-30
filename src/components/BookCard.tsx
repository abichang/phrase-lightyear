import { Link } from "react-router-dom";
import { Book } from "@/data/fake-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link to={`/book/${book.id}`} className="block h-full">
      <Card className="rounded-xl shadow-sm border-secondary/50 overflow-hidden flex flex-col h-full transition-all hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="font-serif text-2xl">{book.title}</CardTitle>
          <CardDescription className="text-secondary-foreground/80">作者：{book.author}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="italic text-secondary-foreground/90 border-l-2 border-accent pl-4">
            {book.poeticExcerpt}
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">主題：{book.theme}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
