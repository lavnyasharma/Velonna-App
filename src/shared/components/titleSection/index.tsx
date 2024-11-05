import Typography from "@/shared/components/Typography";
import {styles} from './styles'
interface TitleSectionProps {
  value: string
}
export default function TitleSection({value}: TitleSectionProps) {

  return (
    <Typography customStyle={styles.value} value={value} />
  )
}
