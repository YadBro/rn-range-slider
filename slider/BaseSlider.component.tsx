import React, { useCallback } from 'react';

import Label, { type BaseSliderLabelProps } from './components/BaseSliderLabel.component';
import Notch, { type BaseSliderNotchProps } from './components/BaseSliderNotch.component';
import Rail, { type BaseSliderRailProps } from './components/BaseSliderRail.component';
import RailSelected, { type BaseSliderRailSelectedProps } from './components/BaseSliderRailSelected.component';
import Thumb, { type BaseSliderThumbProps } from './components/BaseSliderThumb.component';

import Slider, { type SliderProps } from 'rn-range-slider';
import styles from './BaseSlider.style';

export type BaseSliderProps = {
  min: number
  max: number
  onChangeLowValueHandler: (newLowValue: number) => void
  onChangeHighValueHandler: (newHighValue: number) => void
  labelProps?: Partial<BaseSliderLabelProps>
  notchProps?: Partial<BaseSliderNotchProps>
  railProps?: Partial<BaseSliderRailProps>
  railSelectedProps?: Partial<BaseSliderRailSelectedProps>
  thumbProps?: Partial<BaseSliderThumbProps>
} & Partial<SliderProps>

const BaseSlider = ({
  min = 10,
  max = 100,
  onChangeLowValueHandler,
  onChangeHighValueHandler,
  labelProps,
  notchProps,
  railProps,
  railSelectedProps,
  thumbProps,
  ...props
}: BaseSliderProps) => {
  const renderThumb = useCallback(
    (name: 'high' | 'low') => <Thumb {...thumbProps} name={name} />,
    [],
  );
  const renderRail = useCallback(() => <Rail {...railProps} />, []);
  const renderRailSelected = useCallback(() => <RailSelected {...railProps} />, []);
  const renderLabel = useCallback((value: any) => <Label {...labelProps} text={value} />, []);
  const renderNotch = useCallback(() => <Notch {...notchProps} />, []);
  const handleValueChange = useCallback((lowValue: number, highValue: number) => {
    onChangeLowValueHandler(lowValue);
    onChangeHighValueHandler(highValue);
  }, []);


  return (
    <Slider
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
      style={[styles.slider, props?.style]}
    />
  );
};

export default BaseSlider;