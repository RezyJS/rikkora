import { Box } from '@rikkora/ui';
import type { ApiProp, PreviewValue } from '@/entities/documentation';
import { documentationStyles as styles } from '@/shared/ui/documentation';

export function ComponentPropertyMetadata({ property, values, ru }: { property: ApiProp; values: PreviewValue[]; ru: boolean }) {
  return <Box as='dl' className={styles.propMetadata}>
    <Box>
      <Box as='dt'>{!values.length ? (ru ? 'Тип' : 'Type') : property.type === 'boolean' || property.type.split(' | ').every(value => /^'[^']*'$|^-?\d+(?:\.\d+)?$/.test(value)) ? (ru ? 'Значения' : 'Values') : (ru ? 'Примеры значений' : 'Example values')}</Box>
      <Box as='dd'>{(values.length ? values : [property.type]).map(value => <Box as='code' key={String(value)} className={styles.valueToken}>{String(value)}</Box>)}</Box>
    </Box>
    <Box>
      <Box as='dt'>{ru ? 'По умолчанию' : 'Default'}</Box>
      <Box as='dd'><Box as='code' className={styles.defaultToken}>{property.defaultValue}</Box></Box>
    </Box>
  </Box>;
}
