import Content from './content.mdx';

export const metadata = {
  title: 'Elements | Blog'
};

export default function Elements() {
  return (
    <div className="mx-auto mb-16 mt-12 flex flex-col gap-16 px-8">
      <div className="prose [&>p>code]:rounded [&>p>code]:bg-neutral [&>p>code]:px-1.5">
        <Content />
        <div className="not-prose mockup-code">
          <pre data-prefix="$">
            <code>npm i daisyui</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
