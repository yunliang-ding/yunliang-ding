export interface DemoProps {
  /** 描述信息 */
  desc?: string;
}

export default ({ desc }: DemoProps) => {
  return <div>这里是一个DEMO - {desc}</div>;
};
