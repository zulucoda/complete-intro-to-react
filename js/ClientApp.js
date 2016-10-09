/**
 * Created by muzikayise on 2016/10/09.
 */
var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render (){
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title))
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Prop are the great!', color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'Use props everywhere!', color: 'mediumaquamarine'}),
    ce(MyTitle, {title: 'Props are the best!', color: 'peru'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
