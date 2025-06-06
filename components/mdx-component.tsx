import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Callout from './callout';

const components = {
  Image,
  Callout,
};

export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  const { components: customComponents } = components;

  return (
    <div>
      <Component components={components} />
    </div>
  );
}
