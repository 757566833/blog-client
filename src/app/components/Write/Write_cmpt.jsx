import React from 'react';
import { withRouter } from 'react-router-dom';
import Control from '../../control/components/Write';
import { message, Input, Button, Select } from 'antd';
const { TextArea } = Input;
const Option = Select.Option;
// import { markdown } from 'markdown';
import marked from 'marked';
export let WriteRef;
import './style.less';
class Write extends React.Component {
    constructor(props) {
        super(props);
        WriteRef = this;
        this.isMount = true;
        console.log();
    }
    state = {

        author: '',
        createdAt: '',

        type: [],
        title: '',
        subTitle: '',
        summary: '',
        text: '',

        show: '',

        imageIndex: 1,
        imageUrlJosn: {},

        tabs: []
    }
    componentDidMount = () => {
        console.log(this.props.match.params._id);
        if (this.props.match.params._id) {
            Control.article({ _id: this.props.match.params._id });
        }
        Control.getTabs();
        document.addEventListener('paste', this.paste);
    }
    componentWillUnmount = () => {
        this.isMount = false;
        document.removeeventlistener('paste', this.paste);
    }
    paste = (event) => {
        let { text, show, imageIndex, imageUrlJosn } = this.state;
        let img = new Image();
        // let _this = this;
        console.log(event);
        if (event.clipboardData || event.originalEvent) {
            //某些chrome版本使用的是event.originalEvent
            var clipboardData = (event.clipboardData || event.originalEvent.clipboardData);
            if (clipboardData.items) {
                // for chrome
                var items = clipboardData.items,
                    len = items.length,
                    blob = null;
                for (var i = 0; i < len; i++) {
                    console.log(items[i]);
                    if (items[i].type.indexOf('image') !== -1) {
                        blob = items[i].getAsFile();
                    }
                }
                if (blob !== null) {
                    var reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onload = (event) => {
                        // event.target.result 即为图片的Base64编码字符串
                        var base64_str = event.target.result;
                        console.log(base64_str);
                        img.src = base64_str;
                        // text += `![avatar](${base64_str})`;
                        // this.setState({
                        //     text
                        // });
                        img.onload = () => {
                            // 缩放图片需要的canvas（也可以在DOM中直接定义canvas标签，这样就能把压缩完的图片不转base64也能直接显示出来）
                            var canvas = document.createElement('canvas');
                            var context = canvas.getContext('2d');

                            // 图片原始尺寸
                            var originWidth = img.width;
                            var originHeight = img.height;
                            console.log(this);

                            // 最大尺寸限制，可通过设置宽高来实现图片压缩程度
                            var maxWidth = 1200,
                                maxHeight = 800;
                            // 目标尺寸
                            var targetWidth = originWidth,
                                targetHeight = originHeight;
                            // 图片尺寸超过300x300的限制
                            if (originWidth > maxWidth || originHeight > maxHeight) {
                                if (originWidth / originHeight > maxWidth / maxHeight) {
                                    // 更宽，按照宽度限定尺寸
                                    targetWidth = maxWidth;
                                    targetHeight = Math.round(maxWidth * (originHeight / originWidth));
                                } else {
                                    targetHeight = maxHeight;
                                    targetWidth = Math.round(maxHeight * (originWidth / originHeight));
                                }
                            }
                            // canvas对图片进行缩放
                            canvas.width = targetWidth;
                            canvas.height = targetHeight;
                            // 清除画布
                            context.clearRect(0, 0, targetWidth, targetHeight);
                            // 图片压缩
                            context.drawImage(img, 0, 0, targetWidth, targetHeight);
                            /*第一个参数是创建的img对象；第二三个参数是左上角坐标，后面两个是画布区域宽高*/

                            //压缩后的图片转base64 url
                            /*canvas.toDataURL(mimeType, qualityArgument),mimeType 默认值是'image/png';
                             * qualityArgument表示导出的图片质量，只有导出为jpeg和webp格式的时候此参数才有效，默认值是0.92*/
                            var newUrl = canvas.toDataURL('image/jpeg', 0.92);//base64 格式

                            show += `![avatar](${newUrl})`;
                            text += `![avatar](Image${imageIndex}Url)`;
                            imageUrlJosn[`Image${imageIndex}Url`] = newUrl;
                            imageIndex++;
                            this.setState({
                                show: show,
                                text: text,
                                imageUrlJosn: imageUrlJosn,
                                imageIndex: imageIndex
                            });
                            sessionStorage.text = show;
                            //也可以把压缩后的图片转blob格式用于上传
                            // canvas.toBlob((blob)=>{
                            //     console.log(blob)
                            //     //把blob作为参数传给后端
                            // }, 'image/jpeg', 0.92)
                        };
                    };
                }
            }
        }
    }
    setText = (e) => {
        let str = e.target.value;
        const { imageUrlJosn } = this.state;
        for (const key in imageUrlJosn) {
            if (imageUrlJosn.hasOwnProperty(key)) {
                console.log(str);
                console.log(key);
                const element = imageUrlJosn[key];
                console.log(element);
                str = str.replace(new RegExp(key, 'g'), element);

            }
        }
        this.setState({
            text: e.target.value,
            show: str
        });
        sessionStorage.text = str;
    }
    setTabs = (tabs) => {
        if (this.isMount) {
            this.setState({
                tabs: tabs
            });
        }
    }
    setResult = (result) => {
        result.type = result.type.split(',');
        this.setState({
            ...result,
        });
    }
    submit = () => {
        const {
            type,
            title,
            subTitle,
            summary,
        } = this.state;
        const text = sessionStorage.text;
        console.log(type, title, subTitle, summary, text);
        Control.addArticle({ type, title, subTitle, summary, text });
    }
    edit = () => {
        const {
            type,
            title,
            subTitle,
            summary,
        } = this.state;
        const text = sessionStorage.text;
        console.log(type, title, subTitle, summary, text);
        const _id = this.props.match.params._id;
        Control.updateArticle({ json: { type, title, subTitle, summary, text }, _id });
    }
    setTitle = (e) => {
        const title = e.target.value.trim();
        if (title.length < 50) {
            this.setState({
                title: title
            });
        }
    }
    setSubTitle = (e) => {
        const subTitle = e.target.value;
        if (subTitle.length < 100) {
            this.setState({
                subTitle: subTitle
            });
        }
    }
    setSummary = (e) => {
        const summary = e.target.value;
        if (summary.length < 200) {
            this.setState({
                summary: summary
            });
        }
    }
    selectChange = (type) => {
        console.log(type);
        this.setState({
            type: type
        });
    }
    saveSuccess = (msg) => {
        message.info(msg);
    }
    updateSuccess= (msg) => {
        message.info(msg);
    }
    interfaceError = (msg) => {
        message.error(`接口错误，错误信息${msg}`);
    }
    networkError = (code) => {
        message.error(`网络错误${code}`);
    }
    render() {
        const {
            type,
            title,
            subTitle,
            summary,
            text,
            tabs
        } = this.state;
        const _id = this.props.match.params._id;
        return (
            <div className='Write flex'>
                <div className='Write'>
                    <div>
                        <Select
                            value={type}
                            style={{ width: '100%' }}
                            onChange={this.selectChange}
                            mode="multiple"
                        >
                            {tabs.map((item) => {
                                return (
                                    <Option key={item.tab}>{item.tab}</Option>
                                );
                            })}
                        </Select>
                    </div>
                    <Input addonBefore='标题' value={title} onChange={this.setTitle} />
                    <Input addonBefore='二级标题' value={subTitle} onChange={this.setSubTitle} />
                    <Input addonBefore='摘要' value={summary} onChange={this.setSummary} />
                    <TextArea rows={4} value={text} onChange={this.setText} />
                    <div>
                        <a href='/ExamineView' target='_blank'>带图片预览</a>
                    </div>
                    {
                        _id ? <Button onClick={this.edit}>提交修改</Button> : <Button onClick={this.submit}>提交创建</Button>
                    }

                </div>
                <div>
                    <div className='markdown-section' dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
                </div>
            </div>
        );
    }
}
export default withRouter(Write);
