import Model, { attr } from '@ember-data/model';

export default class SubcategoryAnnualReportModel extends Model {
  @attr('dollars') aprActual;
  @attr('dollars') aprBudget;
  @attr('dollars') augActual;
  @attr('dollars') augBudget;
  @attr('dollars') decActual;
  @attr('dollars') decBudget;
  @attr('dollars') febActual;
  @attr('dollars') febBudget;
  @attr('boolean') hasNextYear;
  @attr('boolean') hasPreviousYear;
  @attr('dollars') marActual;
  @attr('dollars') marBudget;
  @attr('dollars') mayActual;
  @attr('dollars') mayBudget;
  @attr('dollars') janActual;
  @attr('dollars') janBudget;
  @attr('dollars') julActual;
  @attr('dollars') julBudget;
  @attr('dollars') junActual;
  @attr('dollars') junBudget;
  @attr('dollars') novActual;
  @attr('dollars') novBudget;
  @attr('dollars') octActual;
  @attr('dollars') octBudget;
  @attr('dollars') sepActual;
  @attr('dollars') sepBudget;
  @attr('number') year;

  get aprActualStr() {
    const aprActual = parseFloat(this.aprActual) || 0;
    if (aprActual === 0) {
      return '-';
    }
    const aprActualStr = aprActual.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${aprActualStr}`;
  }

  get aprAlert() {
    const aprActual = parseFloat(this.aprActual) || 0;
    const aprBudget = parseFloat(this.aprBudget) || 0;
    return aprActual > aprBudget;
  }

  get aprBalanceStr() {
    const aprActual = parseFloat(this.aprActual) || 0;
    const aprBudget = parseFloat(this.aprBudget) || 0;
    const aprBalance = aprBudget - aprActual;
    if (aprBalance === 0) {
      return '-';
    }
    const aprBalanceStr = aprBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${aprBalanceStr}`;
  }

  get aprBudgetStr() {
    const aprBudget = parseFloat(this.aprBudget) || 0;
    if (aprBudget === 0) {
      return '-';
    }
    const aprBudgetStr = aprBudget.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${aprBudgetStr}`;
  }

  get augActualStr() {
    const augActual = parseFloat(this.augActual) || 0;
    if (augActual === 0) {
      return '-';
    }
    const augActualStr = augActual.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${augActualStr}`;
  }

  get augAlert() {
    const augActual = parseFloat(this.augActual) || 0;
    const augBudget = parseFloat(this.augBudget) || 0;
    return augActual > augBudget;
  }

  get augBalanceStr() {
    const augActual = parseFloat(this.augActual) || 0;
    const augBudget = parseFloat(this.augBudget) || 0;
    const augBalance = augBudget - augActual;
    if (augBalance === 0) {
      return '-';
    }
    const augBalanceStr = augBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${augBalanceStr}`;
  }

  get augBudgetStr() {
    const augBudget = parseFloat(this.augBudget) || 0;
    if (augBudget === 0) {
      return '-';
    }
    const augBudgetStr = augBudget.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${augBudgetStr}`;
  }

  get decActualStr() {
    const decActual = parseFloat(this.decActual) || 0;
    if (decActual === 0) {
      return '-';
    }
    const decActualStr = decActual.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${decActualStr}`;
  }

  get decAlert() {
    const decActual = parseFloat(this.decActual) || 0;
    const decBudget = parseFloat(this.decBudget) || 0;
    return decActual > decBudget;
  }

  get decBalanceStr() {
    const decActual = parseFloat(this.decActual) || 0;
    const decBudget = parseFloat(this.decBudget) || 0;
    const decBalance = decBudget - decActual;
    if (decBalance === 0) {
      return '-';
    }
    const decBalanceStr = decBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${decBalanceStr}`;
  }

  get decBudgetStr() {
    const decBudget = parseFloat(this.decBudget) || 0;
    if (decBudget === 0) {
      return '-';
    }
    const decBudgetStr = decBudget.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${decBudgetStr}`;
  }

  get febActualStr() {
    const febActual = parseFloat(this.febActual) || 0;
    if (febActual === 0) {
      return '-';
    }
    const febActualStr = febActual.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${febActualStr}`;
  }

  get febAlert() {
    const febActual = parseFloat(this.febActual) || 0;
    const febBudget = parseFloat(this.febBudget) || 0;
    return febActual > febBudget;
  }

  get febBalanceStr() {
    const febActual = parseFloat(this.febActual) || 0;
    const febBudget = parseFloat(this.febBudget) || 0;
    const febBalance = febBudget - febActual;
    if (febBalance === 0) {
      return '-';
    }
    const febBalanceStr = febBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${febBalanceStr}`;
  }

  get febBudgetStr() {
    const febBudget = parseFloat(this.febBudget) || 0;
    if (febBudget === 0) {
      return '-';
    }
    const febBudgetStr = febBudget.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${febBudgetStr}`;
  }

  get marActualStr() {
    const marActual = parseFloat(this.marActual) || 0;
    if (marActual === 0) {
      return '-';
    }
    const marActualStr = marActual.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${marActualStr}`;
  }

  get marAlert() {
    const marActual = parseFloat(this.marActual) || 0;
    const marBudget = parseFloat(this.marBudget) || 0;
    return marActual > marBudget;
  }

  get marBalanceStr() {
    const marActual = parseFloat(this.marActual) || 0;
    const marBudget = parseFloat(this.marBudget) || 0;
    const marBalance = marBudget - marActual;
    if (marBalance === 0) {
      return '-';
    }
    const marBalanceStr = marBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${marBalanceStr}`;
  }

  get marBudgetStr() {
    const marBudget = parseFloat(this.marBudget) || 0;
    if (marBudget === 0) {
      return '-';
    }
    const marBudgetStr = marBudget.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${marBudgetStr}`;
  }

  get mayActualStr() {
    const mayActual = parseFloat(this.mayActual) || 0;
    if (mayActual === 0) {
      return '-';
    }
    const mayActualStr = mayActual.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${mayActualStr}`;
  }

  get mayAlert() {
    const mayActual = parseFloat(this.mayActual) || 0;
    const mayBudget = parseFloat(this.mayBudget) || 0;
    return mayActual > mayBudget;
  }

  get mayBalanceStr() {
    const mayActual = parseFloat(this.mayActual) || 0;
    const mayBudget = parseFloat(this.mayBudget) || 0;
    const mayBalance = mayBudget - mayActual;
    if (mayBalance === 0) {
      return '-';
    }
    const mayBalanceStr = mayBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${mayBalanceStr}`;
  }

  get mayBudgetStr() {
    const mayBudget = parseFloat(this.mayBudget) || 0;
    if (mayBudget === 0) {
      return '-';
    }
    const mayBudgetStr = mayBudget.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${mayBudgetStr}`;
  }

  get janActualStr() {
    const janActual = parseFloat(this.janActual) || 0;
    if (janActual === 0) {
      return '-';
    }
    const janActualStr = janActual.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${janActualStr}`;
  }

  get janAlert() {
    const janActual = parseFloat(this.janActual) || 0;
    const janBudget = parseFloat(this.janBudget) || 0;
    return janActual > janBudget;
  }

  get janBalanceStr() {
    const janActual = parseFloat(this.janActual) || 0;
    const janBudget = parseFloat(this.janBudget) || 0;
    const janBalance = janBudget - janActual;
    if (janBalance === 0) {
      return '-';
    }
    const janBalanceStr = janBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${janBalanceStr}`;
  }

  get janBudgetStr() {
    const janBudget = parseFloat(this.janBudget) || 0;
    if (janBudget === 0) {
      return '-';
    }
    const janBudgetStr = janBudget.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${janBudgetStr}`;
  }

  get julActualStr() {
    const julActual = parseFloat(this.julActual) || 0;
    if (julActual === 0) {
      return '-';
    }
    const julActualStr = julActual.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${julActualStr}`;
  }

  get julAlert() {
    const julActual = parseFloat(this.julActual) || 0;
    const julBudget = parseFloat(this.julBudget) || 0;
    return julActual > julBudget;
  }

  get julBalanceStr() {
    const julActual = parseFloat(this.julActual) || 0;
    const julBudget = parseFloat(this.julBudget) || 0;
    const julBalance = julBudget - julActual;
    if (julBalance === 0) {
      return '-';
    }
    const julBalanceStr = julBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${julBalanceStr}`;
  }

  get julBudgetStr() {
    const julBudget = parseFloat(this.julBudget) || 0;
    if (julBudget === 0) {
      return '-';
    }
    const julBudgetStr = julBudget.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${julBudgetStr}`;
  }

  get junActualStr() {
    const junActual = parseFloat(this.junActual) || 0;
    if (junActual === 0) {
      return '-';
    }
    const junActualStr = junActual.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${junActualStr}`;
  }

  get junAlert() {
    const junActual = parseFloat(this.junActual) || 0;
    const junBudget = parseFloat(this.junBudget) || 0;
    return junActual > junBudget;
  }

  get junBalanceStr() {
    const junActual = parseFloat(this.junActual) || 0;
    const junBudget = parseFloat(this.junBudget) || 0;
    const junBalance = junBudget - junActual;
    if (junBalance === 0) {
      return '-';
    }
    const junBalanceStr = junBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${junBalanceStr}`;
  }

  get junBudgetStr() {
    const junBudget = parseFloat(this.junBudget) || 0;
    if (junBudget === 0) {
      return '-';
    }
    const junBudgetStr = junBudget.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${junBudgetStr}`;
  }

  get novActualStr() {
    const novActual = parseFloat(this.novActual) || 0;
    if (novActual === 0) {
      return '-';
    }
    const novActualStr = novActual.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${novActualStr}`;
  }

  get novAlert() {
    const novActual = parseFloat(this.novActual) || 0;
    const novBudget = parseFloat(this.novBudget) || 0;
    return novActual > novBudget;
  }

  get novBalanceStr() {
    const novActual = parseFloat(this.novActual) || 0;
    const novBudget = parseFloat(this.novBudget) || 0;
    const novBalance = novBudget - novActual;
    if (novBalance === 0) {
      return '-';
    }
    const novBalanceStr = novBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${novBalanceStr}`;
  }

  get novBudgetStr() {
    const novBudget = parseFloat(this.novBudget) || 0;
    if (novBudget === 0) {
      return '-';
    }
    const novBudgetStr = novBudget.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${novBudgetStr}`;
  }

  get octActualStr() {
    const octActual = parseFloat(this.octActual) || 0;
    if (octActual === 0) {
      return '-';
    }
    const octActualStr = octActual.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${octActualStr}`;
  }

  get octAlert() {
    const octActual = parseFloat(this.octActual) || 0;
    const octBudget = parseFloat(this.octBudget) || 0;
    return octActual > octBudget;
  }

  get octBalanceStr() {
    const octActual = parseFloat(this.octActual) || 0;
    const octBudget = parseFloat(this.octBudget) || 0;
    const octBalance = octBudget - octActual;
    if (octBalance === 0) {
      return '-';
    }
    const octBalanceStr = octBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${octBalanceStr}`;
  }

  get octBudgetStr() {
    const octBudget = parseFloat(this.octBudget) || 0;
    if (octBudget === 0) {
      return '-';
    }
    const octBudgetStr = octBudget.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${octBudgetStr}`;
  }

  get sepActualStr() {
    const sepActual = parseFloat(this.sepActual) || 0;
    if (sepActual === 0) {
      return '-';
    }
    const sepActualStr = sepActual.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${sepActualStr}`;
  }

  get sepAlert() {
    const sepActual = parseFloat(this.sepActual) || 0;
    const sepBudget = parseFloat(this.sepBudget) || 0;
    return sepActual > sepBudget;
  }

  get sepBalanceStr() {
    const sepActual = parseFloat(this.sepActual) || 0;
    const sepBudget = parseFloat(this.sepBudget) || 0;
    const sepBalance = sepBudget - sepActual;
    if (sepBalance === 0) {
      return '-';
    }
    const sepBalanceStr = sepBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${sepBalanceStr}`;
  }

  get sepBudgetStr() {
    const sepBudget = parseFloat(this.sepBudget) || 0;
    if (sepBudget === 0) {
      return '-';
    }
    const sepBudgetStr = sepBudget.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${sepBudgetStr}`;
  }

  get totActual() {
    const janActual = parseFloat(this.janActual) || 0;
    const febActual = parseFloat(this.febActual) || 0;
    const marActual = parseFloat(this.marActual) || 0;
    const aprActual = parseFloat(this.aprActual) || 0;
    const mayActual = parseFloat(this.mayActual) || 0;
    const junActual = parseFloat(this.junActual) || 0;
    const julActual = parseFloat(this.julActual) || 0;
    const augActual = parseFloat(this.augActual) || 0;
    const sepActual = parseFloat(this.sepActual) || 0;
    const octActual = parseFloat(this.octActual) || 0;
    const novActual = parseFloat(this.novActual) || 0;
    const decActual = parseFloat(this.decActual) || 0;
    return janActual
      + febActual
      + marActual
      + aprActual
      + mayActual
      + junActual
      + julActual
      + augActual
      + sepActual
      + octActual
      + novActual
      + decActual;
  }

  get totActualStr() {
    if (this.totActual === 0) {
      return '-';
    }
    const totActualStr = this.totActual.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${totActualStr}`;
  }

  get totAlert() {
    return this.totActual > this.totBudget;
  }

  get totBalanceStr() {
    const totBalance = this.totBudget - this.totActual;
    if (totBalance === 0) {
      return '-';
    }
    const totBalanceStr = totBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${totBalanceStr}`;
  }

  get totBudget() {
    const janBudget = parseFloat(this.janBudget) || 0;
    const febBudget = parseFloat(this.febBudget) || 0;
    const marBudget = parseFloat(this.marBudget) || 0;
    const aprBudget = parseFloat(this.aprBudget) || 0;
    const mayBudget = parseFloat(this.mayBudget) || 0;
    const junBudget = parseFloat(this.junBudget) || 0;
    const julBudget = parseFloat(this.julBudget) || 0;
    const augBudget = parseFloat(this.augBudget) || 0;
    const sepBudget = parseFloat(this.sepBudget) || 0;
    const octBudget = parseFloat(this.octBudget) || 0;
    const novBudget = parseFloat(this.novBudget) || 0;
    const decBudget = parseFloat(this.decBudget) || 0;
    return janBudget
      + febBudget
      + marBudget
      + aprBudget
      + mayBudget
      + junBudget
      + julBudget
      + augBudget
      + sepBudget
      + octBudget
      + novBudget
      + decBudget;
  }

  get totBudgetStr() {
    if (this.totBudget === 0) {
      return '-';
    }
    const totBudgetStr = this.totBudget.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${totBudgetStr}`;
  }
}
