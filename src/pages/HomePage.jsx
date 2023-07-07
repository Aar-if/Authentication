import { React, useState } from "react";
import MainHeader from "../components/header/MainHeader";
import { DatePicker, ColorPicker, Skeleton } from "antd";
import { Col, Row, Statistic, Space, Button } from "antd";
import CountUp from "react-countup";
import { useEffect } from "react";
import axios from "axios";

const formatter = (value) => <CountUp end={value} separator="," />;

function HomePage() {
  const [date, setDate] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const handleChange = (value) => {
    console.log(value.$D);
    console.log(value.$M);
    console.log(value.$y);
    console.log(value);
    setDate(value.$D);
    setMonth(value.$M + 1);
    setYear(value.$y);
  };
  const [loading, setLoading] = useState(false);

  const showSkeleton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  const handleColor = (value) => {
    console.log(value);
  };

  return (
    <div>
      <MainHeader />
      <DatePicker onChange={handleChange} />
      <div>
        <br />
        <ColorPicker onChange={handleColor} />
        <br />
        <span>{date}</span> <br />
        <span>{month}</span> <br />
        <span>{year}</span>
      </div>{" "}
      <br />
      <Row gutter={16}>
        <Col span={12}>
          <Statistic
            title="Active Users"
            value={112893}
            formatter={formatter}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Account Balance (CNY)"
            value={112893}
            precision={2}
            formatter={formatter}
          />
        </Col>
      </Row>
      <Space direction="vertical" style={{ width: "100%" }} size={16}>
        <Skeleton loading={loading}>
          <h4 style={{ marginBottom: 16 }}>Ant Design, a design language</h4>
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        </Skeleton>
        <Button onClick={showSkeleton} disabled={loading}>
          Show Skeleton
        </Button>
      </Space>
    </div>
  );
}

export default HomePage;
