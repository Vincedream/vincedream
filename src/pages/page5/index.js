import React, { Component } from 'react';
import moment from 'moment'
import echarts from 'echarts'
import { isEqual } from 'lodash'
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
  Transfer,
  Tree,
  Table,
  Divider
} from 'antd';
import "./index.scss";

const { Option } = Select;


const { TreeNode } = Tree;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Action 一 {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
        <Divider type="vertical" />
        <a className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    ),
  },
];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = { y: 240 };
const pagination = { position: 'bottom' };
// Customize Table Transfer
const isChecked = (selectedKeys, eventKey) => {
  return selectedKeys.indexOf(eventKey) !== -1;
};

const generateTree = (treeNodes = [], checkedKeys = []) => {
  return treeNodes.map(({ children, ...props }) => (
    <TreeNode {...props} disabled={checkedKeys.includes(props.key)} key={props.key}>
      {generateTree(children, checkedKeys)}
    </TreeNode>
  ));
};

const TreeTransfer = ({ dataSource, targetKeys, ...restProps }) => {
  const transferDataSource = [];
  function flatten(list = []) {
    list.forEach(item => {
      transferDataSource.push(item);
      flatten(item.children);
    });
  }
  flatten(dataSource);

  return (
    <Transfer
      {...restProps}
      targetKeys={targetKeys}
      dataSource={transferDataSource}
      className="tree-transfer"
      render={item => item.title}
      showSelectAll={false}
    >
      {({ direction, onItemSelect, selectedKeys }) => {
        if (direction === 'left') {
          const checkedKeys = [...selectedKeys, ...targetKeys];
          return (
            <Tree
              blockNode
              checkable
              checkStrictly
              defaultExpandAll
              checkedKeys={checkedKeys}
              onCheck={(
                _,
                {
                  node: {
                    props: { eventKey },
                  },
                },
              ) => {
                onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));
              }}
              onSelect={(
                _,
                {
                  node: {
                    props: { eventKey },
                  },
                },
              ) => {
                onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));
              }}
            >
              {generateTree(dataSource, targetKeys)}
            </Tree>
          );
        }
      }}
    </Transfer>
  );
};

const treeData = [
  { key: '0-0', title: '0-0' },
  {
    key: '0-1',
    title: '0-1',
    children: [{ key: '0-1-0', title: '0-1-0' }, { key: '0-1-1', title: '0-1-1' }],
  },
  { key: '0-2', title: '0-3' },
];

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetKeys: [],
      bordered: false,
    loading: false,
    pagination,
    size: 'default',
    expandedRowRender,
    title: undefined,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
    tableLayout: undefined,
    }
  }
  componentDidMount() {
    this.initCharts()
    console.log(isEqual('222', '333'))
  }
  handexx = () => {
    console.log('xxx')
  }
  onChange = targetKeys => {
    console.log('Target Keys:', targetKeys);
    this.setState({ targetKeys });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  handleToggle = prop => enable => {
    this.setState({ [prop]: enable });
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  handleTableLayoutChange = e => {
    this.setState({ tableLayout: e.target.value });
  };

  handleExpandChange = enable => {
    this.setState({ expandedRowRender: enable ? expandedRowRender : undefined });
  };

  handleEllipsisChange = enable => {
    this.setState({ ellipsis: enable });
  };

  handleTitleChange = enable => {
    this.setState({ title: enable ? title : undefined });
  };

  handleHeaderChange = enable => {
    this.setState({ showHeader: enable ? showHeader : false });
  };

  handleFooterChange = enable => {
    this.setState({ footer: enable ? footer : undefined });
  };

  handleRowSelectionChange = enable => {
    this.setState({ rowSelection: enable ? {} : undefined });
  };

  handleScollChange = enable => {
    this.setState({ scroll: enable ? scroll : undefined });
  };

  handleDataChange = hasData => {
    this.setState({ hasData });
  };

  handlePaginationChange = e => {
    const { value } = e.target;
    this.setState({
      pagination: value === 'none' ? false : { position: value },
    });
  };

  func0 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func1 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func2 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func3 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func4 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func5 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func6 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func7 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func8 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func9 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func10 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func11 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func12 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func13 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func14 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func15 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func16 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func17 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func18 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func19 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func20 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func21 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func22 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func23 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func24 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func25 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func26 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func27 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func28 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func29 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func30 = () => {
    const a = { name: '77848', age: 12 };
    console.log({ ...a });
  }
  func31 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func32 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func33 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func34 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func35 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func36 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func37 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func38 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  func39 = () => {
    const a = { name: '7788', age: 12 };
    console.log({ ...a });
  }
  initCharts() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('charts'));
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬3衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const { state } = this;
    const { targetKeys } = this.state;
    return (
      <div>
        <div className="text222">ho,e</div>
        <div id="charts"></div>
        <TreeTransfer dataSource={treeData} targetKeys={targetKeys} onChange={this.onChange} />
        <Button>ff3333ff</Button>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Plain Text">
          <span className="ant-form-text">China</span>
        </Form.Item>
        <Form.Item label="Select" hasFeedback>
          {getFieldDecorator('select', {
            rules: [{ required: true, message: 'Please select your country!' }],
          })(
            <Select placeholder="Please select a country">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="Select[multiple]">
          {getFieldDecorator('select-multiple', {
            rules: [
              { required: true, message: 'Please select your favourite colors!', type: 'array' },
            ],
          })(
            <Select mode="multiple" placeholder="Please select favourite colors">
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="InputNumber">
          {getFieldDecorator('input-number', { initialValue: 3 })(<InputNumber min={1} max={10} />)}
          <span className="ant-form-text"> machines</span>
        </Form.Item>

        <Form.Item label="Switch">
          {getFieldDecorator('switch', { valuePropName: 'checked' })(<Switch />)}
        </Form.Item>

        <Form.Item label="Slider">
          {getFieldDecorator('slider')(
            <Slider
              marks={{
                0: 'A',
                20: 'B',
                40: 'C',
                60: 'D',
                80: 'E',
                100: 'F',
              }}
            />,
          )}
        </Form.Item>

        <Form.Item label="Radio.Group">
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value="a">item 1</Radio>
              <Radio value="b">item 2</Radio>
              <Radio value="c">item 3</Radio>
            </Radio.Group>,
          )}
        </Form.Item>

        <Form.Item label="Radio.Button">
          {getFieldDecorator('radio-button')(
            <Radio.Group>
              <Radio.Button value="a">item 1</Radio.Button>
              <Radio.Button value="b">item 2</Radio.Button>
              <Radio.Button value="c">item 3</Radio.Button>
            </Radio.Group>,
          )}
        </Form.Item>

        <Form.Item label="Checkbox.Group">
          {getFieldDecorator('checkbox-group', {
            initialValue: ['A', 'B'],
          })(
            <Checkbox.Group style={{ width: '100%' }}>
              <Row>
                <Col span={8}>
                  <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox disabled value="B">
                    B
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="D">D</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="E">E</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>,
          )}
        </Form.Item>

        <Form.Item label="Rate">
          {getFieldDecorator('rate', {
            initialValue: 3.5,
          })(<Rate />)}
        </Form.Item>

        <Form.Item label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>,
          )}
        </Form.Item>

        <Form.Item label="Dragger">
          {getFieldDecorator('dragger', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Cl3ick or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>,
          )}
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Sub3mit2
          </Button>
        </Form.Item>
      </Form>
      <div>
        <Form
          layout="inline"
          className="components-table-demo-control-bar"
          style={{ marginBottom: 16 }}
        >
          <Form.Item label="Bordered">
            <Switch checked={state.bordered} onChange={this.handleToggle('bordered')} />
          </Form.Item>
          <Form.Item label="loading">
            <Switch checked={state.loading} onChange={this.handleToggle('loading')} />
          </Form.Item>
          <Form.Item label="Title">
            <Switch checked={!!state.title} onChange={this.handleTitleChange} />
          </Form.Item>
          <Form.Item label="Column Header">
            <Switch checked={!!state.showHeader} onChange={this.handleHeaderChange} />
          </Form.Item>
          <Form.Item label="Footer">
            <Switch checked={!!state.footer} onChange={this.handleFooterChange} />
          </Form.Item>
          <Form.Item label="Expandable">
            <Switch checked={!!state.expandedRowRender} onChange={this.handleExpandChange} />
          </Form.Item>
          <Form.Item label="Checkbox">
            <Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange} />
          </Form.Item>
          <Form.Item label="Fixed Header">
            <Switch checked={!!state.scroll} onChange={this.handleScollChange} />
          </Form.Item>
          <Form.Item label="Has Data">
            <Switch checked={!!state.hasData} onChange={this.handleDataChange} />
          </Form.Item>
          <Form.Item label="Ellipsis">
            <Switch checked={!!state.ellipsis} onChange={this.handleEllipsisChange} />
          </Form.Item>
          <Form.Item label="Size">
            <Radio.Group value={state.size} onChange={this.handleSizeChange}>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="middle">Middle</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Table Layout">
            <Radio.Group value={state.tableLayout} onChange={this.handleTableLayoutChange}>
              <Radio.Button value={undefined}>Unset</Radio.Button>
              <Radio.Button value="fixed">Fixed</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Pagination">
            <Radio.Group
              value={state.pagination ? state.pagination.position : 'none'}
              onChange={this.handlePaginationChange}
            >
              <Radio.Button value="top">Top</Radio.Button>
              <Radio.Button value="bottom">Bottom</Radio.Button>
              <Radio.Button value="both">Both</Radio.Button>
              <Radio.Button value="none">None</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>
        <Table
          {...this.state}
          columns={columns.map(item => ({ ...item, ellipsis: state. ellipsis }))}
          dataSource={state.hasData ? data : null}
        />
      </div>
      </div>
    );
  }
}
const WrappedDemo = Form.create({ name: 'validate_other' })(index);
export default WrappedDemo;

