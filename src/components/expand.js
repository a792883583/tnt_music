export default{
  name: 'TableExpand',
  functional: true,
  props:{
      row: Object,
      render: Function,
      index: Number,
      column:{
          type: Object,
          default: null
      }
  },
  render:(h,ctx)=>{
      const params={
          row: ctx.props.row,
          index: ctx.props.index
      }
      return ctx.props.render(h,params);
  }
}