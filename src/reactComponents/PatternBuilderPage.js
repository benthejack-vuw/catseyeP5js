import React from 'react'
import { connect } from 'react-redux'

import PatternOptionsPanel from './PatternOptionsPanel'
import GridSelectionPanel  from './GridSelectionPanel'
import PatternDisplay from './PatternDisplay.js'

export const PatternBuilderPage = (props) => (
    <div>

        <PatternOptionsPanel/>
        <PatternDisplay
            image={props.image}
            maxTileSize={200}
            polyGrid={props.grid}
            scale={props.scale}
            textureCoordinates={props.textureCoordinates}
            showGrid={true}
        />
        <GridSelectionPanel 
            grids={
                [{
                    name:'square',
                    polyGrid:JSON.parse(`{"polygons":[[{"x":60,"y":0},{"x":0.00007960769380065197,"y":59.99999999994719},{"x":-59.999999999788756,"y":0.0001592153876011638},{"x":-0.00023882308142804073,"y":-59.9999999995247}],[{"x":-59.99999999966993,"y":0.00019901923450049708},{"x":-120.00023882190635,"y":-59.99948254951496},{"x":-60.00063686122031,"y":-119.99980097896989},{"x":-0.00023882465256974683,"y":-60.000278626453024}],[{"x":0.00011941154071593019,"y":59.99999999988118},{"x":-59.99964176516662,"y":120.00015921479348},{"x":-119.99988058740306,"y":60.000477646043976},{"x":-60.00027862671706,"y":0.00015921658906847824}],[{"x":-59.99996019582302,"y":0.0001990190628584038},{"x":-119.99956215650897,"y":60.00051744851777},{"x":-179.9999601930768,"y":0.0009950960008891774},{"x":-120.00051744883463,"y":-59.99948254757414}]],"bounds":{"x":0.000056291177470934345,"y":-0.00019701931731930244,"width":84.85315148827426,"height":84.85309519788106},"normalized_clipRect":{"x":0,"y":0,"width":1,"height":0.9999993366139946},"normalized_polygons":[[{"x":-0.49999867321643604,"y":-0.49999568793550686},{"x":0.49999668303069084,"y":-0.499996351329876},{"x":0.4999986732137953,"y":0.4999990049154904},{"x":-0.49999668302805017,"y":0.5000023218873304}],[{"x":0.49999900491020893,"y":0.49999867321709635},{"x":0.5000036486707845,"y":1.4999940294536604},{"x":-0.49999170755873884,"y":1.5000000000029712},{"x":-0.4999990048967847,"y":0.5000046437822507}],[{"x":0.49999635133273673,"y":-0.49999668302672995},{"x":1.4999917075745823,"y":-0.4999999999985701},{"x":1.4999963513351575,"y":0.4999953562379947},{"x":0.5000009951056347,"y":0.5000013267873055}],[{"x":0.4999986732113747,"y":0.49999834152112266},{"x":1.499994029440897,"y":0.4999923709718115},{"x":1.5000013267789436,"y":1.4999877271925326},{"x":0.500005970568785,"y":1.499996351319314}]],"edge_normalized_clipRect":{"x":0,"y":0,"width":1.4142191914712376,"height":1.4142182532980176},"edge_normalized_polygons":[[{"x":-0.7071077193728398,"y":-0.7071034975312578},{"x":0.7071049048139643,"y":-0.7071044357163062},{"x":0.7071077193691052,"y":0.7071081884680083},{"x":-0.7071049048102298,"y":0.707112879393242}],[{"x":0.7071081884605391,"y":0.7071077193737736},{"x":0.7071147557558657,"y":2.12132034354564},{"x":-0.7070978684060432,"y":2.121328787211058},{"x":-0.7071081884415543,"y":0.7071161630615989}],[{"x":0.7071044357203519,"y":-0.7071049048083627},{"x":2.121317059899687,"y":-0.7071095957335967},{"x":2.121323627195013,"y":0.7071030284382703},{"x":0.707111003033105,"y":0.7071114721036892}],[{"x":0.707107719365682,"y":0.7071072502829618},{"x":2.1213203435275894,"y":0.7070988066175424},{"x":2.1213306635631017,"y":2.121311430767003},{"x":0.7071180394285786,"y":2.121323627172607}]]}`)
                },{
                    name:'tri',
                    polyGrid:JSON.parse(`{"polygons":[[{"x":60,"y":0},{"x":-29.999908076906156,"y":51.96157729878088},{"x":-30.000183845906026,"y":-51.96141808314934}],[{"x":-30.000229807464677,"y":-51.9613915471498},{"x":59.999678268596526,"y":-103.92328727670588},{"x":60.00022980744121,"y":-0.00013268060767757106}],[{"x":-30.000229807300386,"y":-51.96133847527263},{"x":-30.000781346145033,"y":-155.88449307137083},{"x":59.99967826707086,"y":-103.9235526360918}],[{"x":59.999632306873586,"y":-103.92331381242089},{"x":150.00009192008946,"y":-51.96237337714181},{"x":60.00045961640808,"y":-2.6425439614286006e-9}],[{"x":59.99958634545577,"y":-103.9232872761774},{"x":149.9992186491372,"y":-155.8856606506766},{"x":150.00032172682648,"y":-51.962506058969105}],[{"x":150.0000919196435,"y":-51.962426449018984},{"x":150.00119499733285,"y":51.96072814268854},{"x":60.00045961934205,"y":0.00026535674334692276}]],"bounds":{"x":-30.00050557672271,"y":-103.92408335482286,"width":180.0011490352109,"height":103.92416296263863},"normalized_clipRect":{"x":0,"y":0,"width":1,"height":0.5773527753553925},"normalized_polygons":[[{"x":0.4999996169975408,"y":0.5773523330925725},{"x":0.0000033194222356689373,"y":0.8660259197740465},{"x":0.0000017873820162128537,"y":0.2886796309367384}],[{"x":0.0000015320416536774406,"y":0.28867977835801695},{"x":0.49999782961226474,"y":0.0000044226279734547885},{"x":0.5000008936973976,"y":0.5773515959827907}],[{"x":0.0000015320425664032327,"y":0.28868007319989686},{"x":-0.0000015320425664032327,"y":-0.28866710015492036},{"x":0.4999978296037888,"y":0.00000294841857344228}],[{"x":0.49999757427098945,"y":0.0000042752082755769444},{"x":0.9999969359173445,"y":0.28867432378176966},{"x":0.5000021704057304,"y":0.5773523330778917}],[{"x":0.49999731893140936,"y":0.000004422630909398631},{"x":0.9999920844430237,"y":-0.28867358666521237},{"x":0.9999982126132893,"y":0.2886735866652123}],[{"x":0.9999969359148669,"y":0.28867402893988975},{"x":1.000003064085133,"y":0.8660212022703145},{"x":0.5000021704220301,"y":0.5773538072872916}]],"edge_normalized_clipRect":{"x":0,"y":0,"width":3.000019150586848,"height":1.732069382710644},"edge_normalized_polygons":[[{"x":1.5000084262787117,"y":1.7320680559137143},{"x":0.000009958330275890621,"y":2.598094344226729},{"x":0.000005362180278053094,"y":0.8660444211945586}],[{"x":0.000004596154300529065,"y":0.8660448634612176},{"x":1.5000030640886541,"y":0.000013267968616285468},{"x":1.500012256402732,"y":1.732065844570253}],[{"x":0.000004596157038723921,"y":0.8660457479925037},{"x":-0.000004596157038723921,"y":-0.8660068286091328},{"x":1.500003064063226,"y":0.000008845312184272795}],[{"x":1.5000022980599383,"y":0.000012825706699478208},{"x":3.0000099582802027,"y":0.8660284996280174},{"x":1.5000160865521797,"y":1.7320680558696717}],[{"x":1.500001532036308,"y":0.00001326797742417322},{"x":2.9999954037643315,"y":-0.8660262882642293},{"x":3.0000137883924864,"y":0.8660262882642292}],[{"x":3.00000995827277,"y":0.8660276150967312},{"x":3.000028342900926,"y":2.5980801916251903},{"x":1.5000160866010792,"y":1.7320724785261032}]]}`)
                },{
                    name:'hex',
                    polyGrid:JSON.parse(`{"polygons":[[{"x":60,"y":0},{"x":30.000045961511717,"y":51.961497691148054},{"x":-29.999908076906156,"y":51.96157729878088},{"x":-59.999999999788756,"y":0.0001592153876011638},{"x":-30.000183845906026,"y":-51.96141808314934},{"x":29.999770192089347,"y":-51.96165690604782}],[{"x":-30.00020682661789,"y":-51.961404815113966},{"x":-60.00043663368355,"y":-103.92274329038656},{"x":-30.0007583646176,"y":-155.8844001959465},{"x":29.999195672532775,"y":-155.88479823411063},{"x":59.99956336357024,"y":-103.92353936732464},{"x":30.000022979532368,"y":-51.961802855107564}],[{"x":59.99956336335312,"y":-103.92356590322258},{"x":119.99951739923603,"y":-103.92412315665234},{"x":150.00002297403404,"y":-51.962943898718805},{"x":120.00062047523545,"y":-0.001127780210502749},{"x":60.000666441042526,"y":-0.0004113115150872204},{"x":30.000022982695185,"y":-51.96151096023029}],[{"x":120.00064345584168,"y":-0.0011410484288063572},{"x":150.00128691418902,"y":51.95995860028642},{"x":120.00202230084096,"y":103.92185432472004},{"x":60.00206826876048,"y":103.92273000868107},{"x":30.001286927075093,"y":51.96170996955009},{"x":60.00041365476138,"y":-0.00026536044296676664}],[{"x":30.000068942258764,"y":51.96148442317366},{"x":60.00016086514137,"y":103.92290250656693},{"x":30.000344711258638,"y":155.88447980510387},{"x":-29.999609326736756,"y":155.88471862800236},{"x":-59.999839133802396,"y":103.92338015272976},{"x":-30.00016086473649,"y":51.96172324716983}],[{"x":-29.999885096118028,"y":51.9615905666841},{"x":-59.99970125000077,"y":103.92316786522107},{"x":-119.99965528799615,"y":103.92340668811954},{"x":-149.9998850950618,"y":51.962068212846944},{"x":-120.00020682599586,"y":0.00041130728696714414},{"x":-60.00025278884547,"y":0.000013269122852932469}],[{"x":-30.000183845794552,"y":-51.96139154727171},{"x":-59.999862114860505,"y":0.00026535828826723673},{"x":-119.99981615201091,"y":0.000663396452374343},{"x":-150.00018384304838,"y":-51.96059547033365},{"x":-120.00064345901049,"y":-103.92233198255073},{"x":-60.00068942312757,"y":-103.92288923598053}]],"bounds":{"x":-90.00022980630872,"y":-51.962280501758265,"width":180.0015167265535,"height":103.92405681997184},"normalized_clipRect":{"x":0,"y":0,"width":1,"height":0.577351006313166},"normalized_polygons":[[{"x":0.8333275882012663,"y":0.2886769036546284},{"x":0.6666625812387847,"y":0.5773494583980674},{"x":0.3333323119746326,"y":0.5773499006589675},{"x":0.16666653899419276,"y":0.2886777881771063},{"x":0.3333307799375426,"y":0.000004791174122355465},{"x":0.6666610491993477,"y":0.000003464391421717887}],[{"x":0.3333306522679969,"y":0.000004864884808885605},{"x":0.16666411327077257,"y":-0.28866680533344186},{"x":0.33332758819381725,"y":-0.5773402445939382},{"x":0.6666578574509279,"y":-0.5773424558984391},{"x":0.8333251624637631,"y":-0.2886712279458318},{"x":0.6666624535621976,"y":0.000002653570144226375}],[{"x":0.833325162462557,"y":-0.2886713753662448},{"x":1.166655431712626,"y":-0.28867447119254613},{"x":1.3333235027398986,"y":-0.0000036855076146279695},{"x":1.1666615598609855,"y":0.28867063826180833},{"x":0.8333312906203051,"y":0.28867461860991006},{"x":0.6666624535797686,"y":0.000004275194687063348}],[{"x":1.1666616875299445,"y":0.28867056455010554},{"x":1.333330524570481,"y":0.5773409079653287},{"x":1.1666693477153935,"y":0.8660156739861657},{"x":0.833339078486449,"y":0.8660205388560678},{"x":0.6666694754338224,"y":0.5773506377125859},{"x":0.8333298862639099,"y":0.28867542944236735}],[{"x":0.666662708908526,"y":0.5773493846877197},{"x":0.8333284818889657,"y":0.8660214971695808},{"x":0.6666642409456158,"y":1.1546944941725648},{"x":0.33333397168381074,"y":1.1546958209552656},{"x":0.1666674326865865,"y":0.8660241507370147},{"x":0.3333309076096309,"y":0.5773507114765185}],[{"x":0.3333324396446019,"y":0.5773499743689199},{"x":0.16666819870125202,"y":0.8660229713719041},{"x":-0.16666207056055304,"y":0.8660242981546047},{"x":-0.33332860955777743,"y":0.5773526279363538},{"x":-0.16666513463473276,"y":0.2886791886758574},{"x":0.16666513462237795,"y":0.28867697737135645}],[{"x":0.3333307799381619,"y":0.000004938594422544729},{"x":0.16666730501511723,"y":0.288678377854919},{"x":-0.16666296424199353,"y":0.2886805891594199},{"x":-0.33333026925482884,"y":0.00000936120681235131},{"x":-0.1666675603532632,"y":-0.2886645203091637},{"x":0.1666627088968061,"y":-0.28866761613546527}]],"edge_normalized_clipRect":{"x":0,"y":0,"width":3.0000252787758916,"height":1.7320676136661972},"edge_normalized_polygons":[[{"x":2.500003830105145,"y":0.8660380083626378},{"x":2.0000045961303408,"y":1.732062969881772},{"x":1.0000053621567095,"y":1.7320642966756523},{"x":0.5000038301086661,"y":0.8660406619524311},{"x":1.0000007660067116,"y":0.000014373643482083291},{"x":1.9999999999733011,"y":0.000010393261840728011}],[{"x":1.0000003829948472,"y":0.000014594777404989637},{"x":0.4999965528770863,"y":-0.866007713143805},{"x":0.9999911906948521,"y":-1.7320353282364707},{"x":1.9999904246473583,"y":-1.7320419622058727},{"x":2.4999965528313157,"y":-0.8660209810927728},{"x":2.0000042130973514,"y":0.000007960777511684113}],[{"x":2.4999965528276973,"y":-0.8660214233577386},{"x":3.499995786759079,"y":-0.8660307109149012},{"x":4.000004213005712,"y":-0.000011056616009004945},{"x":3.5000141713590693,"y":0.866019212025796},{"x":2.500014937455854,"y":0.8660311531707197},{"x":2.0000042131500653,"y":0.00001282569213287843}],[{"x":3.5000145543691734,"y":0.8660189908888243},{"x":4.000025278674963,"y":1.7320373183674114},{"x":3.5000375351191613,"y":2.5980689137746387},{"x":2.5000383012511533,"y":2.5980835085073224},{"x":2.0000252788897304,"y":1.7320665078551394},{"x":2.5000107243511684,"y":0.8660335856885883}],[{"x":2.0000049791427914,"y":1.7320627487488656},{"x":2.5000065111908345,"y":2.5980863834720864},{"x":2.0000095752927893,"y":3.4641126717810358},{"x":1.0000103413261994,"y":3.4641166521626774},{"x":0.5000065112084388,"y":2.598094344241467},{"x":1.000001149026204,"y":1.7320667291488017}],[{"x":1.000005745169845,"y":1.7320645178073728},{"x":0.5000088092717992,"y":2.5980908061163226},{"x":-0.49999042469479044,"y":2.5980947864979638},{"x":-0.9999942548125514,"y":1.7320724785767534},{"x":-0.4999996169947856,"y":0.8660448634840872},{"x":0.4999996169577209,"y":0.8660382295146853}],[{"x":1.0000007660085695,"y":0.000014815908109255815},{"x":0.5000061281908036,"y":0.8660424310007755},{"x":-0.4999931057617031,"y":0.8660490649701773},{"x":-0.9999992339456608,"y":0.000028083857076903012},{"x":-0.5000068942116961,"y":-0.8660008580132078},{"x":0.49999233971968593,"y":-0.8660101455703711}]]}`)
                }]
            }
        />
    </div>
)

const mapStateToProps = (state) => ({
    image: state.patternBuilder.image,
    scale: state.patternBuilder.scale,
    grid: state.patternBuilder.grid,
    textureCoordinates: state.patternBuilder.textureCoordinates,
});

export default connect(mapStateToProps) (PatternBuilderPage);