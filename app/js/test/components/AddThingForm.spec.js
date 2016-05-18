/* global describe it */
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import { AddThingForm } from '../../src/containers/AddThingForm';

const renderComp = () => (
    shallow(<AddThingForm dispatch={() => ({})} />)
);

describe('AddThingForm component', () => {
    it('should render', () => {
        const comp = renderComp();
        expect(comp.length).toEqual(1);
    });
});
