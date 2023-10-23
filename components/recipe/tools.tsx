import { Tool } from '@prisma/client';

export interface ToolsProps {
  tools: Tool[];
}

export default function Tools({ tools }: ToolsProps) {
  return (
    <>
      <p className='mb-2 pt-4 text-xl font-semibold'>Tools</p>

      <ul className='list-inside'>
        {tools.map((tool) => (
          <li key={tool.id} className='text-slate-600'>
            {tool.name}
          </li>
        ))}
      </ul>
    </>
  );
}
