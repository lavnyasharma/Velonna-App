import Typography from "@/shared/components/Typography";
import { styles } from './styles';

export default function TitleSection({ value }) {

  return (
    <Typography customStyle={styles.value} value={value} />
  );
}
