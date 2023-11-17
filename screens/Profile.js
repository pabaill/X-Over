import { StyleSheet, Text, View } from 'react-native';

// Styles
const styles = {
  app: {
    flex: 4,
    marginHorizontal: "auto",
    width: 400,
    backgroundColor: "red"
  },
  row: {
    flexDirection: "row"
  },
  "1col": {
    backgroundColor: "lightblut",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 1
  },
  "2col": {
    backgroundColor: "green",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 2
  },
  "3col": {
    backgroundColor: "orange",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 3
  },
  "4col": {
    flex: 4
  }
};

const Col = ({ numRows, children }) => {
  return (
    <View style={styles['${numRows}col']}>{children}</View>
  )
}

// RN Code
const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)

export default function Profile() {
  return (
    <View style={styles.app}>
      <Row>
        <Col numRows={2}>
          <Text>First Column</Text>
        </Col>
        <Col numRows={2}>
          <Text>Second Column</Text>
        </Col>
      </Row>
      <Row>
        <Col numRows={1}>
          <Text>First Column</Text>
        </Col>
        <Col numRows={3}>
          <Text>Second Column</Text>
        </Col>
      </Row>
    </View>
  )
}

// <Text>Welcome to Profile</Text>