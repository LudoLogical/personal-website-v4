import Content from './content.mdx';

export const metadata = {
  title: 'Elements | Blog'
};

export default function Elements() {
  return (
    <div className="mx-auto mb-16 mt-12 flex flex-col gap-16 px-8">
      <div className="prose">
        <Content />
      </div>
    </div>
  );
}
