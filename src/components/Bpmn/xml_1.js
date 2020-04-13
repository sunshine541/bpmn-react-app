const xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:activiti="http://activiti.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:tns="http://www.activiti.org/testm1585830330745" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" expressionLanguage="http://www.w3.org/1999/XPath" id="m1585830330745" name="" targetNamespace="http://www.activiti.org/testm1585830330745" typeLanguage="http://www.w3.org/2001/XMLSchema">
  <process id="myProcess_1" isClosed="false" isExecutable="true" processType="None">
    <startEvent id="_2" name="StartEvent"/>
    <userTask activiti:exclusive="true" id="_3" name="UserTask"/>
    <serviceTask activiti:exclusive="true" id="_4" name="ServiceTask"/>
    <exclusiveGateway gatewayDirection="Unspecified" id="_5" name="ExclusiveGateway"/>
    <userTask activiti:exclusive="true" id="_6" name="UserTask"/>
    <userTask activiti:exclusive="true" id="_7" name="UserTask"/>
    <endEvent id="_8" name="EndEvent"/>
    <sequenceFlow id="_9" sourceRef="_2" targetRef="_3"/>
    <sequenceFlow id="_10" sourceRef="_3" targetRef="_4"/>
    <sequenceFlow id="_11" sourceRef="_4" targetRef="_5"/>
    <sequenceFlow id="_12" sourceRef="_5" targetRef="_6">
      <conditionExpression xsi:type="tFormalExpression">
        <![CDATA[a=1]]>
      </conditionExpression>
    </sequenceFlow>
    <sequenceFlow id="_13" sourceRef="_5" targetRef="_7">
      <conditionExpression xsi:type="tFormalExpression">
        <![CDATA[a=2]]>
      </conditionExpression>
    </sequenceFlow>
    <sequenceFlow id="_14" sourceRef="_7" targetRef="_8"/>
    <sequenceFlow id="_15" sourceRef="_6" targetRef="_8"/>
  </process>
  <bpmndi:BPMNDiagram documentation="background=#3C3F41;count=1;horizontalcount=1;orientation=0;width=842.4;height=1195.2;imageableWidth=832.4;imageableHeight=1185.2;imageableX=5.0;imageableY=5.0" id="Diagram-_1" name="New Diagram">
    <bpmndi:BPMNPlane bpmnElement="myProcess_1">
      <bpmndi:BPMNShape bpmnElement="_2" id="Shape-_2">
        <dc:Bounds height="32.0" width="32.0" x="140.0" y="240.0"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds height="32.0" width="32.0" x="0.0" y="0.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="_3" id="Shape-_3">
        <dc:Bounds height="55.0" width="85.0" x="310.0" y="240.0"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds height="55.0" width="85.0" x="0.0" y="0.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="_4" id="Shape-_4">
        <dc:Bounds height="55.0" width="85.0" x="515.0" y="245.0"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds height="55.0" width="85.0" x="0.0" y="0.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="_5" id="Shape-_5" isMarkerVisible="false">
        <dc:Bounds height="32.0" width="32.0" x="655.0" y="210.0"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds height="32.0" width="32.0" x="0.0" y="0.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="_6" id="Shape-_6">
        <dc:Bounds height="55.0" width="85.0" x="795.0" y="165.0"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds height="55.0" width="85.0" x="0.0" y="0.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="_7" id="Shape-_7">
        <dc:Bounds height="55.0" width="85.0" x="790.0" y="330.0"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds height="55.0" width="85.0" x="0.0" y="0.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="_8" id="Shape-_8">
        <dc:Bounds height="32.0" width="32.0" x="945.0" y="275.0"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds height="32.0" width="32.0" x="0.0" y="0.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge bpmnElement="_13" id="BPMNEdge__13" sourceElement="_5" targetElement="_7">
        <di:waypoint x="687.0" y="226.0"/>
        <di:waypoint x="790.0" y="357.5"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds height="0.0" width="0.0" x="0.0" y="0.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="_12" id="BPMNEdge__12" sourceElement="_5" targetElement="_6">
        <di:waypoint x="687.0" y="226.0"/>
        <di:waypoint x="795.0" y="192.5"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds height="0.0" width="0.0" x="0.0" y="0.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="_15" id="BPMNEdge__15" sourceElement="_6" targetElement="_8">
        <di:waypoint x="880.0" y="192.5"/>
        <di:waypoint x="945.0" y="291.0"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds height="0.0" width="0.0" x="0.0" y="0.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="_14" id="BPMNEdge__14" sourceElement="_7" targetElement="_8">
        <di:waypoint x="875.0" y="357.5"/>
        <di:waypoint x="945.0" y="291.0"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds height="0.0" width="0.0" x="0.0" y="0.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="_9" id="BPMNEdge__9" sourceElement="_2" targetElement="_3">
        <di:waypoint x="172.0" y="256.0"/>
        <di:waypoint x="310.0" y="267.5"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds height="0.0" width="0.0" x="0.0" y="0.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="_11" id="BPMNEdge__11" sourceElement="_4" targetElement="_5">
        <di:waypoint x="600.0" y="272.5"/>
        <di:waypoint x="655.0" y="226.0"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds height="0.0" width="0.0" x="0.0" y="0.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="_10" id="BPMNEdge__10" sourceElement="_3" targetElement="_4">
        <di:waypoint x="395.0" y="267.5"/>
        <di:waypoint x="515.0" y="272.5"/>
        <bpmndi:BPMNLabel>
          <dc:Bounds height="0.0" width="0.0" x="0.0" y="0.0"/>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>
`;
export default xml