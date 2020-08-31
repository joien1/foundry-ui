import React from 'react';
import { render, fireEvent, waitFor, configure } from '@testing-library/react';
import Icon from '@mdi/react';
import RangeSlider from '../RangeSlider';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);
configure({ testIdAttribute: 'data-test-id' });

const testId = 'hs-ui-range-slider-unit-test';

describe('RangeSlider', () => {
  it('renders', async () => {
    const { container, getByTestId } = render(<RangeSlider min={0} max={10} testId="unit-test" />);

    await waitFor(() => getByTestId(testId));

    expect(container).toMatchSnapshot();
  });
  describe('Accessibility Tests', () => {
    it('Should pass accessibility test with default props', async () => {
      const component = <RangeSlider min={0} max={10} testId={testId} />;
      const { container } = render(component);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
