export default function CityCard() {

  return (
      <div>
          <p>{this.props.name}</p>
          <p>{this.props.image}</p>
          <p>{this.props.temp}</p>
      </div>
  ); 
}