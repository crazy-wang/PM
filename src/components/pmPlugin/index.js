import 'babel-polyfill';
import axios from 'axios';
import echarts from 'echarts';
import {
  DatePicker,
  Select,
  Option,
  Button,
  Tag,
  Tooltip,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dialog
} from 'element-ui';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import '../../assets/sass/overlap.scss';
import '../../assets/sass/public.scss';
import '../../assets/sass/reset.scss';
import 'element-ui/lib/theme-default/select.css';
import 'element-ui/lib/theme-default/select-dropdown.css';
import 'element-ui/lib/theme-default/option.css';
import 'element-ui/lib/theme-default/option-group.css';
import 'element-ui/lib/theme-default/button.css';
import 'element-ui/lib/theme-default/button-group.css';
import 'element-ui/lib/theme-default/tag.css';
import 'element-ui/lib/theme-default/tooltip.css';
import 'element-ui/lib/theme-default/date-picker.css';
import 'element-ui/lib/theme-default/icon.css';
import 'element-ui/lib/theme-default/menu.css';
import 'element-ui/lib/theme-default/menu-item.css';
import 'element-ui/lib/theme-default/dialog.css';

export default {
  install(Vue) {
    Vue.prototype.axios = axios;
    Vue.prototype.echarts = echarts;
    Vue.component(DatePicker.name, DatePicker);
    Vue.component(Tag.name, Tag);
    Vue.component(Select.name, Select);
    Vue.component(Option.name, Option);
    Vue.component(Button.name, Button);
    Vue.component(Tooltip.name, Tooltip);
    Vue.component(CollapseTransition.name, CollapseTransition);
    Vue.component(Menu.name, Menu);
    Vue.component(Submenu.name, Submenu);
    Vue.component(MenuItem.name, MenuItem);
    Vue.component(MenuItemGroup.name, MenuItemGroup);
    Vue.component(Dialog.name, Dialog);

    // 时间对象
    var dateObj = {
      getCplMonth() {
        let month = this.getMonth() + 1;
        return month < 10 ? `0${month}` : month;
      },
      getCplDate() {
        let date = this.getDate();
        return date < 10 ? `0${date}` : date;
      },
      getYMD(split) {
        split = split || '-';
        return `${this.getFullYear()}${split}${this.getCplMonth()}${split}${this.getCplDate()}`;
      },
      getYM(split) {
        split = split || '-';
        return `${this.getFullYear()}${split}${this.getCplMonth()}`;
      }
    };
    Object.assign(Date.prototype, dateObj);
  }
};
