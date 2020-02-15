import React, { Component } from "react";
import { Descriptions, Upload, Icon } from "antd";

const { Dragger } = Upload;

class ProfileMedia extends Component {
  render() {
    return (
      <div>
        <Descriptions layout="vertical" bordered>
          <Descriptions.Item label="Fotografija">
            <Dragger>
              <p style={{ fontSize: 44 }}>
                <Icon type="picture" />
              </p>
              <p style={{ margin: 12, fontWeight: "bold" }}>
                Kliknite ili prevucite fotografiju u ovu regiju da biste je
                ažurirali.
              </p>
              <p style={{ margin: 12 }}>
                Moguće je otpremiti samo jednu fotografiju. Molimo Vas da
                fotografija bude autentična.
              </p>
            </Dragger>
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

export default ProfileMedia;
