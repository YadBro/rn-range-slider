import React, { useCallback } from 'react';
import Slider, { type SliderProps } from '../index';

import Label from './components/BaseSliderLabel.component';
import Notch from './components/BaseSliderNotch.component';
import Rail from './components/BaseSliderRail.component';
import RailSelected from './components/BaseSliderRailSelected.component';
import Thumb from './components/BaseSliderThumb.component';

import styles from './BaseSlider.style';

export type BaseSliderProps = {
  min?: number
  max?: number
  onChangeLowValueHandler: (newLowValue: number) => void
  onChangeHighValueHandler: (newHighValue: number) => void
} & Partial<SliderProps>

const BaseSlider = ({
  min = 10,
  max = 100,
  onChangeLowValueHandler,
  onChangeHighValueHandler,
  ...props
}: BaseSliderProps) => {
  const renderThumb = useCallback(
    (name: 'high' | 'low') => <Thumb name={name} />,
    [],
  );
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value: any) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((lowValue: number, highValue: number) => {
    onChangeLowValueHandler(lowValue);
    onChangeHighValueHandler(highValue);
  }, []);


  return (
    <Slider
      style={styles.slider}
      step={1}
      renderThumb={renderThumb}
      renderRail={renderRail}
      renderRailSelected={renderRailSelected}
      renderLabel={renderLabel}
      renderNotch={renderNotch}
      onValueChanged={handleValueChange}
      floatingLabel
      {...props}
      min={min}
      max={max}
    />
  );
};

export default BaseSlider;