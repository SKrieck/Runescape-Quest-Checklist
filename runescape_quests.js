import { LightningElement, api, track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const columns = [
    { label: 'Member?', fieldName: 'memberCol', type: 'text' },
    { label: 'Quest Name', fieldName: 'questNameCol', type: 'text'},
    { label: 'Points', fieldName: 'pointsCol', type: 'number'},
    { label: 'Length', fieldName: 'lengthCol', type: 'text'},
    { label: 'Requirements', fieldName: 'requirementsCol', type: 'text'},
    { label: 'Ironman requirements', fieldName: 'ironmanRequirementsCol', type: 'text'},
    { label: 'XP Rewards', fieldName: 'xpRewardsCol', type: 'text'},
    { label: 'Item Rewards', fieldName: 'itemRewardsCol', type: 'text'},
    { label: 'Access Rewards', fieldName: 'accessRewardsCol', type: 'text'},
];

export default class Runescape_quests extends LightningElement {
  @api columns = columns;
  @api questData;
  @api member = "";
  @api questName = "";
  @api points = "";
  @api length = "";
  @api require = "";
  @api iron_require = "";
  @api xp_rewards = "";
  @api item_rewards = "";
  @api access_rewards = "";
  @track questInfo;
  @track questList;

  handleAddQuest(event) {
    let newQuest = {
      'memberCol' : this.member,
      'questNameCol' : this.questName,
      'pointsCol' : this.points,
      'lengthCol' : this.length,
      'requirementsCol' : this.require,
      'ironmanRequirementsCol' : this.iron_require,
      'xpRewardsCol' : this.xp_rewards,
      'itemRewardsCol' : this. item_rewards,
      'accessRewardsCol' : this.access_rewards
    }
    // checks if questList is valid
    if(this.questList) {
      this.questList = [...this.questList, newQuest];
    } else {
      this.questList = [newQuest];
    }

    // if result = success, show toast event
    //  const evt = new ShowToastEvent({
     //   title: 'Quest added successfully',
      //  message: 'Quest Name: ' + this.questName,
       // variant: 'success',
    //  });
    //this.dispatchEvent(evt);

    createQuestRecord();

  }

  createQuestRecord() {
    questInfo.Member__c = this.member;
    questInfo.Quest_Name__c = this.questName;
    questInfo.Points__c = this.points;
    questInfo.Length__c = this.length;
    questInfo.Requirements__c = this.require;
    questInfo.Ironman_Requirements__c = this.iron_require;
    questInfo.XP_Rewards__c = this.xp_rewards;
    questInfo.Item_Rewards__c = this.item_rewards;
    questInfo.Access_Rewards__c = this.access_rewards;

    const recordInput = {apiName: 'Runescape_Quest__c', questInfo};

    createRecord(recordInput).then(response => {
      console.log("Quest " + questName + " has been created successfully.");
    }).catch(error => {
      console.log("Quest " + questName + "has failed to be created.");
    })
  }

  handleMemberChange(event) {
    this.member = event.detail.value;
  }

  handleNameChange(event) {
    this.questName = event.detail.value;
  }

  handlePointsChange(event) {
    this.points = event.detail.value;
  }

  handleLengthChange(event) {
    this.length = event.detail.value;
  }

  handleRequireChange(event) {
    this.require = event.detail.value;
  }

  handleIronRequireChange(event) {
    this.iron_require = event.detail.value;
  }

  handleXPRewardsChange(event) {
    this.xp_rewards = event.detail.value;
  }

  handleItemRewardsChange(event) {
    this.item_rewards = event.detail.value;
  }

  handleAccessRewardsChange(event) {
    this.access_rewards = event.detail.value;
  }
}

