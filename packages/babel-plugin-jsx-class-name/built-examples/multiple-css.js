import class_name_styles1 from 'foo1.css';
import class_name_styles2 from 'foo2.css';

class App extends Component {
  render() {
    return <div style={[class_name_styles.foo1, class_name_styles.foo2]} />;
  }
}
let class_name_styles = Object.assign(class_name_styles1, class_name_styles2);