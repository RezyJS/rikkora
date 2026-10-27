import { Link as RouterLink } from 'react-router';
import { Box, Link, Text } from '@rikkora/ui';
import { buttonDoc, buttonSubtypeProps, type ComponentDoc } from '@/entities/documentation';

export function ButtonBaseReference({ doc, ru }: { doc: ComponentDoc; ru: boolean }) {
  const ownProps = buttonSubtypeProps[doc.name as keyof typeof buttonSubtypeProps] as readonly string[];
  const defaults = doc.api.flatMap(part => part.props).filter(property => {
    const base = buttonDoc.api[0].props.find(candidate => candidate.name === property.name);
    return base && !ownProps.includes(property.name) && base.defaultValue !== property.defaultValue;
  });
  return (
    <Text as='p' size='sm' tone='secondary'>
      {doc.name === 'ButtonGroup'
        ? (ru ? 'Оформление вложенных кнопок — в ' : 'For styling the buttons inside the group, see ')
        : (ru ? 'Общие свойства и оформление — в ' : 'For shared props and styling, see ')}
      <Link as={RouterLink} to='/docs/components/button'>Button</Link>.
      {defaults.length > 0 && <>{' '}{ru ? 'Здесь по умолчанию: ' : 'Defaults here: '}
        {defaults.map((property, index) => <Box as='span' key={property.name}>
          {index > 0 && ', '}<Box as='code'>{property.name}={property.defaultValue}</Box>
        </Box>)}.
      </>}
    </Text>
  );
}
