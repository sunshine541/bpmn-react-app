const xml = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" id="Definitions_0fppxr8" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1" name="begin&#10;">
      <bpmn:outgoing>Flow_1qo02t8</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Activity_1kcv0vo" name="任务1111" camunda:asyncBefore="true" camunda:asyncAfter="true" camunda:jobPriority="1234">
      <bpmn:documentation>555</bpmn:documentation>
      <bpmn:extensionElements>
        <camunda:failedJobRetryTimeCycle>444</camunda:failedJobRetryTimeCycle>
        <camunda:executionListener class="12" event="end" />
        <camunda:inputOutput>
          <camunda:inputParameter name="Input_1oc4n7q" />
        </camunda:inputOutput>
        <camunda:properties>
          <camunda:property name="自定义属性1" value="111" />
          <camunda:property name="自定义属性2" value="2222" />
        </camunda:properties>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_1qo02t8</bpmn:incoming>
      <bpmn:outgoing>Flow_0j29poc</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Activity_1p45hky" name="任务2222" camunda:asyncBefore="true" camunda:jobPriority="3">
      <bpmn:documentation>4</bpmn:documentation>
      <bpmn:extensionElements>
        <camunda:failedJobRetryTimeCycle>3</camunda:failedJobRetryTimeCycle>
        <camunda:executionListener class="11" event="start">
          <camunda:field name="22">
            <camunda:string>34</camunda:string>
          </camunda:field>
        </camunda:executionListener>
        <camunda:properties>
          <camunda:property name="zzz" value="333" />
        </camunda:properties>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0j29poc</bpmn:incoming>
      <bpmn:outgoing>Flow_0t9p40b</bpmn:outgoing>
    </bpmn:task>
    <bpmn:exclusiveGateway id="Gateway_0o6yjvp">
      <bpmn:incoming>Flow_0t9p40b</bpmn:incoming>
      <bpmn:outgoing>Flow_01jm49y</bpmn:outgoing>
      <bpmn:outgoing>Flow_1t7nezq</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:task id="Activity_05i00sw">
      <bpmn:incoming>Flow_01jm49y</bpmn:incoming>
      <bpmn:outgoing>Flow_1dfk87q</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Activity_0fky3tz">
      <bpmn:incoming>Flow_1t7nezq</bpmn:incoming>
      <bpmn:outgoing>Flow_07orokx</bpmn:outgoing>
    </bpmn:task>
    <bpmn:endEvent id="Event_0epofru">
      <bpmn:incoming>Flow_07orokx</bpmn:incoming>
      <bpmn:incoming>Flow_1dfk87q</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_1qo02t8" sourceRef="StartEvent_1" targetRef="Activity_1kcv0vo" />
    <bpmn:sequenceFlow id="Flow_0j29poc" sourceRef="Activity_1kcv0vo" targetRef="Activity_1p45hky" />
    <bpmn:sequenceFlow id="Flow_0t9p40b" sourceRef="Activity_1p45hky" targetRef="Gateway_0o6yjvp" />
    <bpmn:sequenceFlow id="Flow_01jm49y" name="条件一" sourceRef="Gateway_0o6yjvp" targetRef="Activity_05i00sw">
      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">1=1</bpmn:conditionExpression>
    </bpmn:sequenceFlow>
    <bpmn:sequenceFlow id="Flow_1t7nezq" name="条件2222" sourceRef="Gateway_0o6yjvp" targetRef="Activity_0fky3tz">
      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">1 != 1</bpmn:conditionExpression>
    </bpmn:sequenceFlow>
    <bpmn:sequenceFlow id="Flow_07orokx" sourceRef="Activity_0fky3tz" targetRef="Event_0epofru" />
    <bpmn:sequenceFlow id="Flow_1dfk87q" sourceRef="Activity_05i00sw" targetRef="Event_0epofru" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNEdge id="Flow_1qo02t8_di" bpmnElement="Flow_1qo02t8">
        <di:waypoint x="428" y="190" />
        <di:waypoint x="464" y="190" />
        <di:waypoint x="464" y="200" />
        <di:waypoint x="500" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0j29poc_di" bpmnElement="Flow_0j29poc">
        <di:waypoint x="600" y="200" />
        <di:waypoint x="655" y="200" />
        <di:waypoint x="655" y="210" />
        <di:waypoint x="710" y="210" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0t9p40b_di" bpmnElement="Flow_0t9p40b">
        <di:waypoint x="810" y="210" />
        <di:waypoint x="915" y="210" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_01jm49y_di" bpmnElement="Flow_01jm49y">
        <di:waypoint x="940" y="185" />
        <di:waypoint x="940" y="110" />
        <di:waypoint x="1040" y="110" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="983" y="123" width="33" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1t7nezq_di" bpmnElement="Flow_1t7nezq">
        <di:waypoint x="940" y="235" />
        <di:waypoint x="940" y="320" />
        <di:waypoint x="1040" y="320" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="957" y="303" width="46" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_07orokx_di" bpmnElement="Flow_07orokx">
        <di:waypoint x="1140" y="320" />
        <di:waypoint x="1216" y="320" />
        <di:waypoint x="1216" y="230" />
        <di:waypoint x="1292" y="230" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1dfk87q_di" bpmnElement="Flow_1dfk87q">
        <di:waypoint x="1140" y="130" />
        <di:waypoint x="1216" y="130" />
        <di:waypoint x="1216" y="230" />
        <di:waypoint x="1292" y="230" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="392" y="172" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="397" y="215" width="27" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1kcv0vo_di" bpmnElement="Activity_1kcv0vo">
        <dc:Bounds x="500" y="160" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1p45hky_di" bpmnElement="Activity_1p45hky">
        <dc:Bounds x="710" y="170" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0o6yjvp_di" bpmnElement="Gateway_0o6yjvp" isMarkerVisible="true">
        <dc:Bounds x="915" y="185" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_05i00sw_di" bpmnElement="Activity_05i00sw">
        <dc:Bounds x="1040" y="90" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0fky3tz_di" bpmnElement="Activity_0fky3tz">
        <dc:Bounds x="1040" y="280" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0epofru_di" bpmnElement="Event_0epofru">
        <dc:Bounds x="1292" y="212" width="36" height="36" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`
export default xml