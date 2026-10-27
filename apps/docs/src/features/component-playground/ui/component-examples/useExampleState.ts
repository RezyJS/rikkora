import { useState } from 'react';

export function useExampleState() {
  const [page, setPage] = useState(1);
  const [volume, setVolume] = useState('50');
  const [selection, setSelection] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [scrollOrientation, setScrollOrientation] = useState<
    'vertical' | 'horizontal' | 'both'
  >('vertical');
  const [scrollType, setScrollType] = useState<
    'hover' | 'scroll' | 'auto' | 'always'
  >('always');
  return {
    page,
    setPage,
    volume,
    setVolume,
    selection,
    setSelection,
    invalid,
    setInvalid,
    disabled,
    setDisabled,
    scrollOrientation,
    setScrollOrientation,
    scrollType,
    setScrollType,
  };
}
