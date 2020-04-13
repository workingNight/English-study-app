import React, { useState } from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'
import Video from './videos/Video'
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import {
  UserOutlined,
  FileWordOutlined,
  VideoCameraOutlined,
  PictureOutlined,
  EditOutlined
} from '@ant-design/icons';
import '../static/css/AdminIndex.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function AdminIndex(props) {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  };

  const handleClickArticle = e => {
    if (e.key === 'addArticle') {
      props.history.push('/index/add')
    } else {
      props.history.push('/index/list')
    }
  }
  
  //退出登录
  function signOut() {
    console.log('退出登录')
    localStorage.removeItem('openId')
    props.history.replace('/login')
  }

  // 登录检查
  // 如果用户已经登陆, 自动跳转到管理界面
  // const openId = localStorage.getItem('openId')
  // if(!openId) {
  //   return <Redirect to='/login'/>
  // }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" >
          {/* <img alt="blog-logo" src="http://ww1.sinaimg.cn/large/006x4mSygy1gdfn3x3jvcj30et06oglf.jpg" style={{width:'100%',height:'160%'}}/> */}
          <h1 style={{fontSize:'30px',textAlign:'center',lineHeight:'30px',color:'rgb(196,1,34)'}}>IELTS</h1>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"> 
          <Menu.Item key="1">
          <FileWordOutlined />
            <Link to="/index">单词管理</Link>
          </Menu.Item>
          <Menu.Item key="2">
          <VideoCameraOutlined />
            <Link to="/index/video">视频课程管理</Link>
          </Menu.Item>
          <Menu.Item key="3">
          <PictureOutlined />
            <Link to="/index/list">首页轮播图管理</Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            onClick={handleClickArticle}
            title={
              <span>
                <EditOutlined />
                <span>作文模块</span>
              </span>
            }
          >
            <Menu.Item key="addArticle"><Link to="/index/add">写作真题</Link></Menu.Item>
            <Menu.Item key="articleList"><Link to="/index/list">写作指南</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
          <UserOutlined />
            <span>用户管理</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0,position:"relative"}}>
          <Button onClick={signOut} style={{position:"absolute",right:"30px",bottom:"10px"}}>退出登录</Button>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
            <Breadcrumb.Item>视频课程管理</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <div>
              {/* 这个页面的子路由 */}
              <Route path="/index" exact component={AddArticle} />
              <Route path="/index/add" exact component={AddArticle} />
              <Route path="/index/add/:id" exact component={AddArticle} />
              <Route path="/index/list" component={ArticleList} />
              <Route path="/index/video" component={Video} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    </Layout>
  )
}

export default AdminIndex