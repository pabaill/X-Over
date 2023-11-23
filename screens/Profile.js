import { StyleSheet, Text, View } from 'react-native';

// Styles
const styles = {
  app: {
    flex: 4,
    marginHorizontal: "auto",
    width: 400,
    backgroundColor: "#fff"
  },
  row: {
    flexDirection: "row"
  },
  "1col": { 
    backgroundColor: "#264d73", //blue color
    borderColor: "#fff",
    borderWidth: 1,
    flex: 4
  },
  "2col": {
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 1
  },
  "3col": {
    flex: 4
  }
};

// RN Code
const Col = ({ numRows, children }) => {
  return (
    <View style={styles[`${numRows}col`]}>{children}</View>
  )
}

const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)

export default function Profile() {
  return (
    <View style={styles.app}>
      <Row>
        <Col numRows={1}>
          <Text>First column</Text>
        </Col>
        <Col numRows={1}>
          <Text>Second column</Text>
        </Col>
      </Row>
      <Row>
        <Col numRows={1}>
          <Text>First column</Text>
        </Col>
        <Col numRows={1}>
          <Text>Second Column</Text>
        </Col>
      </Row>
    </View>
  )
}
