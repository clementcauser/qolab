import { Story, Meta } from '@storybook/react';
import { GridProps, Grid } from './grid';
import { GridColumn } from './column';
import { theme } from '../theme';
import { ReactNode } from 'react';

export default {
  component: Grid,
  title: 'Grid',
} as Meta;

const Content = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      backgroundColor: theme.colors.primary500,
      borderRadius: theme.borderRadius.lg,
      color: theme.colors.textAccent,
      textAlign: 'center',
      padding: theme.spacing[10],
      marginBottom: theme.spacing[8],
    }}
  >
    {children}
  </div>
);

const BasicTemplate: Story<GridProps> = (args) => (
  <>
    <Grid {...args}>
      <GridColumn xs={6}>
        <Content>1 of 2</Content>
      </GridColumn>
      <GridColumn xs={6}>
        <Content>2 of 2</Content>
      </GridColumn>
    </Grid>
    <Grid {...args}>
      <GridColumn xs={4}>
        <Content>1 of 3</Content>
      </GridColumn>
      <GridColumn xs={4}>
        <Content>2 of 3</Content>
      </GridColumn>
      <GridColumn xs={4}>
        <Content>3 of 3</Content>
      </GridColumn>
    </Grid>
    <Grid {...args}>
      <GridColumn xs={3}>
        <Content>1 of 4</Content>
      </GridColumn>
      <GridColumn xs={3}>
        <Content>2 of 4</Content>
      </GridColumn>
      <GridColumn xs={3}>
        <Content>3 of 4</Content>
      </GridColumn>
      <GridColumn xs={3}>
        <Content>4 of 4</Content>
      </GridColumn>
    </Grid>
    <Grid {...args}>
      <GridColumn xs={2}>
        <Content>1 of 6</Content>
      </GridColumn>
      <GridColumn xs={2}>
        <Content>2 of 6</Content>
      </GridColumn>
      <GridColumn xs={2}>
        <Content>3 of 6</Content>
      </GridColumn>
      <GridColumn xs={2}>
        <Content>4 of 6</Content>
      </GridColumn>
      <GridColumn xs={2}>
        <Content>5 of 6</Content>
      </GridColumn>
      <GridColumn xs={2}>
        <Content>6 of 6</Content>
      </GridColumn>
    </Grid>
  </>
);

export const Basic = BasicTemplate.bind({});
