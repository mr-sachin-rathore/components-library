// Re-export everything from Ant Design
export * from 'antd';

// Re-export default components that need special handling
export { default as Layout } from 'antd/es/layout/index.js';
export { default as Typography } from 'antd/es/typography/index.js';
export { default as Button } from 'antd/es/button/index.js';
export { default as Input } from 'antd/es/input/index.js';
export { default as Select } from 'antd/es/select/index.js';
export { default as Form } from 'antd/es/form/index.js';
export { default as Table } from 'antd/es/table/index.js';
export { default as Menu } from 'antd/es/menu/index.js';
export { default as Steps } from 'antd/es/steps/index.js';
export { default as Collapse } from 'antd/es/collapse/index.js';
export { default as Tabs } from 'antd/es/tabs/index.js';
export { default as Card } from 'antd/es/card/index.js';
export { default as List } from 'antd/es/list/index.js';
export { default as Timeline } from 'antd/es/timeline/index.js';
export { default as Descriptions } from 'antd/es/descriptions/index.js';
export { default as Checkbox } from 'antd/es/checkbox/index.js';
export { default as Radio } from 'antd/es/radio/index.js';
export { default as ConfigProvider } from 'antd/es/config-provider/index.js';

// Re-export grid components explicitly
export { Row, Col } from 'antd/es/grid/index.js';

// Re-export other commonly used components
export { default as DatePicker } from 'antd/es/date-picker/index.js';
export { default as TimePicker } from 'antd/es/time-picker/index.js';
export { default as Switch } from 'antd/es/switch/index.js';
export { default as Slider } from 'antd/es/slider/index.js';
export { default as Rate } from 'antd/es/rate/index.js';
export { default as Avatar } from 'antd/es/avatar/index.js';
export { default as Badge } from 'antd/es/badge/index.js';
export { default as Tag } from 'antd/es/tag/index.js';
export { default as Statistic } from 'antd/es/statistic/index.js';
export { default as Breadcrumb } from 'antd/es/breadcrumb/index.js';
export { default as Pagination } from 'antd/es/pagination/index.js';
export { default as Alert } from 'antd/es/alert/index.js';
export { default as Progress } from 'antd/es/progress/index.js';
export { default as Skeleton } from 'antd/es/skeleton/index.js';
export { default as Spin } from 'antd/es/spin/index.js';
export { default as Flex } from 'antd/es/flex/index.js';

// Export custom components
export { CustomButton } from './components/CustomButton';
export type { CustomButtonProps } from './components/CustomButton';

// Export custom theme utilities
export * from './theme';

// CSS Utilities Export
// Note: These CSS files will be available in the dist/styles/ folder after build
// Users can import them like:
// import 'modern-components/dist/styles/utilities.css';
// import 'modern-components/dist/styles/responsive.css';
// import 'modern-components/dist/styles/variables.css';
// import 'modern-components/dist/styles/index.css'; // All styles bundle

// The actual CSS files are located in src/styles/ and will be copied to dist/styles/
// during the build process. No direct exports needed here for CSS.
