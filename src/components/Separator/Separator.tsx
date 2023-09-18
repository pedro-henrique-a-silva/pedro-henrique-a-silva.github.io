import { SeparatorWrapper } from './style';

type SeparatorProps = {
  children: React.ReactNode
  id?: string
}

function Separator(props: SeparatorProps) {
  const { children, id } = props;
  return (
    <SeparatorWrapper id={id}>
      <h1> {children}</h1>
    </SeparatorWrapper>
  )
}

export default Separator