import { SeparatorWrapper } from './style';

type SeparatorProps = {
  children: React.ReactNode
}

function Separator(props: SeparatorProps) {
  const { children } = props;
  return (
    <SeparatorWrapper>
      <h1> {children}</h1>
    </SeparatorWrapper>
  )
}

export default Separator