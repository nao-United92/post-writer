import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export default function UserAuthForm() {
  return (
    <div>
      <form>
        <div>
          <div>
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" placeholder="name@example.com" type="email" />
          </div>
          <button className={cn(buttonVariants())}>
            メールアドレスでログイン
          </button>
        </div>
      </form>
    </div>
  );
}
