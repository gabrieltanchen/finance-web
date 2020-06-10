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
    if (parseFloat(this.aprActual) === 0) {
      return '-';
    }
    const aprActualStr = parseFloat(this.aprActual).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${aprActualStr}`;
  }

  get aprBudgetStr() {
    if (parseFloat(this.aprBudget) === 0) {
      return '-';
    }
    const aprBudgetStr = parseFloat(this.aprBudget).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${aprBudgetStr}`;
  }

  get augActualStr() {
    if (parseFloat(this.augActual) === 0) {
      return '-';
    }
    const augActualStr = parseFloat(this.augActual).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${augActualStr}`;
  }

  get augBudgetStr() {
    if (parseFloat(this.augBudget) === 0) {
      return '-';
    }
    const augBudgetStr = parseFloat(this.augBudget).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${augBudgetStr}`;
  }

  get decActualStr() {
    if (parseFloat(this.decActual) === 0) {
      return '-';
    }
    const decActualStr = parseFloat(this.decActual).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${decActualStr}`;
  }

  get decBudgetStr() {
    if (parseFloat(this.decBudget) === 0) {
      return '-';
    }
    const decBudgetStr = parseFloat(this.decBudget).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${decBudgetStr}`;
  }

  get febActualStr() {
    if (parseFloat(this.febActual) === 0) {
      return '-';
    }
    const febActualStr = parseFloat(this.febActual).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${febActualStr}`;
  }

  get febBudgetStr() {
    if (parseFloat(this.febBudget) === 0) {
      return '-';
    }
    const febBudgetStr = parseFloat(this.febBudget).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${febBudgetStr}`;
  }

  get marActualStr() {
    if (parseFloat(this.marActual) === 0) {
      return '-';
    }
    const marActualStr = parseFloat(this.marActual).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${marActualStr}`;
  }

  get marBudgetStr() {
    if (parseFloat(this.marBudget) === 0) {
      return '-';
    }
    const marBudgetStr = parseFloat(this.marBudget).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${marBudgetStr}`;
  }

  get mayActualStr() {
    if (parseFloat(this.mayActual) === 0) {
      return '-';
    }
    const mayActualStr = parseFloat(this.mayActual).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${mayActualStr}`;
  }

  get mayBudgetStr() {
    if (parseFloat(this.mayBudget) === 0) {
      return '-';
    }
    const mayBudgetStr = parseFloat(this.mayBudget).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${mayBudgetStr}`;
  }

  get janActualStr() {
    if (parseFloat(this.janActual) === 0) {
      return '-';
    }
    const janActualStr = parseFloat(this.janActual).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${janActualStr}`;
  }

  get janBudgetStr() {
    if (parseFloat(this.janBudget) === 0) {
      return '-';
    }
    const janBudgetStr = parseFloat(this.janBudget).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${janBudgetStr}`;
  }

  get julActualStr() {
    if (parseFloat(this.julActual) === 0) {
      return '-';
    }
    const julActualStr = parseFloat(this.julActual).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${julActualStr}`;
  }

  get julBudgetStr() {
    if (parseFloat(this.julBudget) === 0) {
      return '-';
    }
    const julBudgetStr = parseFloat(this.julBudget).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${julBudgetStr}`;
  }

  get junActualStr() {
    if (parseFloat(this.junActual) === 0) {
      return '-';
    }
    const junActualStr = parseFloat(this.junActual).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${junActualStr}`;
  }

  get junBudgetStr() {
    if (parseFloat(this.junBudget) === 0) {
      return '-';
    }
    const junBudgetStr = parseFloat(this.junBudget).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${junBudgetStr}`;
  }

  get novActualStr() {
    if (parseFloat(this.novActual) === 0) {
      return '-';
    }
    const novActualStr = parseFloat(this.novActual).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${novActualStr}`;
  }

  get novBudgetStr() {
    if (parseFloat(this.novBudget) === 0) {
      return '-';
    }
    const novBudgetStr = parseFloat(this.novBudget).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${novBudgetStr}`;
  }

  get octActualStr() {
    if (parseFloat(this.octActual) === 0) {
      return '-';
    }
    const octActualStr = parseFloat(this.octActual).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${octActualStr}`;
  }

  get octBudgetStr() {
    if (parseFloat(this.octBudget) === 0) {
      return '-';
    }
    const octBudgetStr = parseFloat(this.octBudget).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${octBudgetStr}`;
  }

  get sepActualStr() {
    if (parseFloat(this.sepActual) === 0) {
      return '-';
    }
    const sepActualStr = parseFloat(this.sepActual).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${sepActualStr}`;
  }

  get sepBudgetStr() {
    if (parseFloat(this.sepBudget) === 0) {
      return '-';
    }
    const sepBudgetStr = parseFloat(this.sepBudget).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${sepBudgetStr}`;
  }
}
