export default (price) => (!price) ? '-' : price.toPrecision(5);
