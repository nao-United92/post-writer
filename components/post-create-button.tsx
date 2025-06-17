import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

export default function PostCreateButton() {
  const [isLoading, setIsLoading] = useState(false);
  return <button className={cn(buttonVariants())}>新しい投稿</button>;
}
